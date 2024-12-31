const express = require('express');
const mongoose = require('mongoose');
const { Builder, By, until } = require('selenium-webdriver');
const proxy = require('selenium-webdriver/proxy');
const { v4: uuidv4 } = require('uuid');

// MongoDB setup
mongoose.connect('mongodb://127.0.0.1:27017/twitterTrends', {})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define schema
const trendSchema = new mongoose.Schema({
    uniqueId: String,
    trends: [String],
    timestamp: Date,
    ipAddress: String
});
const Trend = mongoose.model('Trend', trendSchema);

// Express setup
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

const PORT = 3000;

// Selenium function to scrape Twitter trends
const scrapeTwitterTrends = async () => {
    const proxyAddress = 'USERNAME:PASSWORD@your-proxymesh-address:31280'; // Replace with ProxyMesh credentials
    const uniqueId = uuidv4();
    const driver = await new Builder()
        .forBrowser('chrome')
        .setProxy(proxy.manual({ http: proxyAddress }))
        .build();

    try {
        await driver.get('https://twitter.com/login');

        // Login process
        const usernameField = await driver.wait(until.elementLocated(By.name('text')), 10000);
        await usernameField.sendKeys('Affan_kumar'); // Replace with your Twitter username

        const nextButton = await driver.findElement(By.xpath('//span[text()="Next"]'));
        await nextButton.click();

        const passwordField = await driver.wait(until.elementLocated(By.name('password')), 10000);
        await passwordField.sendKeys('Lathif@8055'); // Replace with your Twitter password

        const loginButton = await driver.findElement(By.xpath('//span[text()="Log in"]'));
        await loginButton.click();

        // Wait for the homepage to load
        await driver.wait(until.urlContains('home'), 15000);

        // Wait for the "Trending now" section to appear
        await driver.wait(until.elementLocated(By.css('div[data-testid="trend"]')), 15000);

        // Fetch trending topics
        const trendsElements = await driver.findElements(By.css('div[data-testid="trend"] span'));
        const trends = [];

        for (let i = 0; i < Math.min(5, trendsElements.length); i++) {
            trends.push(await trendsElements[i].getText());
        }

        // Debug: Log the fetched trends
        console.log('Fetched Trends:', trends);

        if (trends.length === 0) {
            throw new Error('No trends found. Please check the selector or ensure the "Trending now" section is present.');
        }

        // Get IP address used for this session
        const ipAddress = proxyAddress.split('@')[1].split(':')[0];

        // Save to MongoDB
        const trendData = new Trend({
            uniqueId,
            trends,
            timestamp: new Date(),
            ipAddress
        });
        await trendData.save();

        return { uniqueId, trends, timestamp: trendData.timestamp, ipAddress };
    } catch (err) {
        console.error('Error:', err);
        throw err;
    } finally {
        await driver.quit();
    }
};

// Routes
app.get('/', (req, res) => {
    res.render('index'); // Display the interactive homepage
});

app.get('/scrape', async (req, res) => {
    try {
        const result = await scrapeTwitterTrends();
        res.render('result', result);
    } catch (err) {
        res.status(500).send('Error scraping Twitter trends: ' + err.message);
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
