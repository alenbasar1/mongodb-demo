const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

// Import Routes
const postsRoute = require('./Routes/posts');

// Middlewares
app.use(bodyParser.json());
app.use('/posts', postsRoute);

// ROUTES
app.get('/', (req, res) => {
  res.send('We are on home');
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log('connected to db');
});

// How do we start listening to the server?
app.listen('8000', () => {
  'listening on port 8000';
});
