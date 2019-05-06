const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const cors = require('cors');
const EmployeeRoute = require('./routes/EmployeeRoute');
const port = process.env.PORT || 6004; 
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
app.use(express.static(path.join(__dirname, '../build')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});
app.use('/employee', EmployeeRoute);

app.listen(port).on('listening', () => {
  console.log('We are live on ' + port);
});
