// const express = require("express");
// const router = express.Router();
// const { runScraper } = require("../scraping");

// // Route for the home page
// router.get("/", (req, res) => {
//     res.render("index");
// });

// // Route to fetch trends
// router.get("/fetch-trends", async (req, res) => {
//     try {
//         const result = await runScraper();
//         res.json(result);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// module.exports = router;
