# WEB SCRAPING WITH SELENIUM AND PROXYMESH 🌐📊  

This project automates the extraction of the top 5 trending topics from Twitter's homepage. It utilizes **Selenium**, **ProxyMesh**, and **MongoDB** for automated scraping, anonymity through proxies, and efficient data storage. Additionally, it features a simple **frontend interface** to display and interact with the data.


## Project Title  
**Web scraping with Selenium and ProxyMesh**

## Project Overview  
The Twitter Trending Topics Scraper fetches real-time trends from Twitter, stores them securely in a MongoDB database, and provides a user-friendly frontend to display the scraped data. This project demonstrates automation, data storage, and proxy management.


## Directory Structure 📂  

<img width="392" alt="Screenshot 2024-12-31 at 10 35 08 PM" src="https://github.com/user-attachments/assets/be38e6a9-f615-4540-a80e-00f10b28fd9b" />


## Features 🚀  

### 1. Automated Data Extraction  
- Fetches the top 5 trending topics under "What's Happening" on Twitter using **Selenium**.  

### 2. Proxy Management  
- Utilizes **ProxyMesh** to ensure anonymity and prevent rate-limiting by routing requests through a new IP address for each scrape.  

### 3. Data Storage  
- Stores scraped data in a **MongoDB** collection with:  
  - Unique ID  
  - Trending topics  
  - Timestamp  
  - IP address used  

### 4. User-Friendly Frontend  
- Displays the extracted data (topics, timestamp, and proxy IP) on a simple **EJS-powered interface**.  

### 5. JSON Representation  
- Provides a JSON format of the latest scrape for integration with other applications or systems.  



## Methods Used 🛠️  

### Data Extraction (routes/index.js)  
The script uses Selenium to:  
- Log in to Twitter.  
- Navigate to the homepage.  
- Extract the top 5 trending topics.  

### Proxy Management (.env and app.js)  
- ProxyMesh is configured via the `.env` file.  
- Each request uses a unique proxy for anonymity.  

### MongoDB Integration (app.js)  
- Data is saved into a MongoDB collection with the following fields:  
  - **Unique ID**  
  - **Trending Topics**  
  - **Timestamp**  
  - **Proxy IP Address**  


## Installation 📥  

### Prerequisites  
1. **Node.js** (v14 or higher)  
2. **MongoDB** installed and running  
3. **Selenium WebDriver** (e.g., ChromeDriver)  
4. **ProxyMesh Account**  

### Setup  

### Usage 🖥️

1.**Install the following dependencies**:
```
npm install express mongoose selenium-webdriver uuid ejs 
  ```
**Here's a quick overview of the required packages**:
- express: A web framework for Node.js, used for handling HTTP requests and serving the web application.
- mongoose: A MongoDB library for interacting with MongoDB databases.
- selenium-webdriver: A library to automate the web browser for scraping purposes.
- uuid: A library to generate unique identifiers.
- ejs: A templating engine used to render HTML views.
  
2.**Set Up MongoDB**:

- Make sure MongoDB is running locally and start the MongoDB

3.**Start the application**:

```
node app.js  
  ```
  
4.**Open the frontend**:

- Navigate to http://localhost:3000 in your browser.

5.**Scrape Twitter trends**:

- Click the "Fetch Trends" button on the homepage to initiate scraping.

6.**View the results**:

- Trends, timestamp, and proxy IP will be displayed on the results page.

## Example Output
```
JSON Data (MongoDB Entry):
json
Copy code
{  
  "_id": "64a1bcf48c1b3d001d231aef",  
  "trending_topics": [  
    "Trend 1",  
    "Trend 2",  
    "Trend 3",  
    "Trend 4",  
    "Trend 5"  
  ],  
  "timestamp": "2024-12-31T13:13:00",  
  "proxy_ip": "123.45.67.89"  
}  
  ```

## Demo Images
**Homepage with 'Fetch Trends' button**:
![WhatsApp Image 2024-12-31 at 21 59 15](https://github.com/user-attachments/assets/f8afb4cf-fc98-49de-9dcd-d58a8d575012)

**Results Page showing extracted trends**:
![WhatsApp Image 2024-12-31 at 21 59 16](https://github.com/user-attachments/assets/88206ed5-c88f-497d-98f6-9fa644dd6aa8)


## Conclusion

Twitter Trending Topics Scraper is a robust project for automating trend extraction from Twitter while ensuring anonymity and secure data storage. Its modular design makes it extensible for advanced features, such as API integration or analytics dashboards.

This project showcases expertise in:
- **Web automation** with Selenium.
- **Proxy management** for anonymity and rate-limit evasion.
- **Database integration** using MongoDB.
- **Frontend development** with EJS and Express.js.
  
## Contact
For any questions or suggestions, feel free to reach out:

LinkedIn: [Your LinkedIn Profile](https://www.linkedin.com/in/mohamed-musaraf-180877244/)


## Acknowledgments
- Selenium for browser automation
- MongoDB for data storage
- ProxyMesh for proxy management
- Express.js for building the backend
- Stir Tech Internship for inspiring this project
