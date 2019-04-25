const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const cors = require('cors');
const EmployeeRoute = require('./routes/EmployeeRoute');

const app = express();

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/timeoff')
  .then(() => {
    console.log('✌🏾 Successfully connected to MongoDB');
  })
  .catch(err => {
    console.log('An error occured while conencting to MongoDB', err);
  });

app.use(cors());

// Add middlewares for parsing JSON and urlencoded data and populating `req.body`
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

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

app.use('/employee', EmployeeRoute);

app.listen(6004).on('listening', () => {
  console.log('We are live on ' + 6004);
});
