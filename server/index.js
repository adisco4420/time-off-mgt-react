const http = require('http');
const path = require('path')
const express = require('express');
const axios = require('axios');

const port = process.env.PORT; 
const app = express();
const server = http.createServer(app);
// Use express static
if (process.env.NODE_ENV !== "production") {
    app.use(express.static(path.join(__dirname, '../public')));
} else {
    app.use(express.static(path.join(__dirname, '../build')));
}

app.get('/', (req, res) => {
    if (process.env.NODE_ENV !== "production") {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    } else {
        res.sendFile(path.join(__dirname, '../build/index.html'));
    }
});

app.get('/holidays', (req, res) => {
    const API_KEY = '3aea719b9e3eb0ba8c1950cc17e66f8b3bc80d1b';
    const BASE_URL = `https://calendarific.com/api/v2/holidays?country=NG&year=2018&api_key=${API_KEY}`;

    axios.get(BASE_URL)
        .then(response => {
            res.json(response.data);
        }, error => {
            res.status(400)
            res.json({ message: error.message })
        });
});

server.listen(port, () => {
    console.log(`Server is listening for connection on ${port}`);
});