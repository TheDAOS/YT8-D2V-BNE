const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Express on Vercel!');
});

module.exports.handler = serverless(app);
