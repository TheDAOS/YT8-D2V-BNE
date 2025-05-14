const express = require('express');
const app = express();
const serverless = require('serverless-http');

app.use(express.json());

app.post('/download', async (req, res) => {
    const { url } = req.body;
    res.json({ message: `Received URL: ${url}` });
    // Replace this with actual yt-dlp logic if hosted elsewhere
});

module.exports.handler = serverless(app);
