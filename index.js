// Set up environments
require('dotenv').config();

// Set up imports
const path = require('path');
const express = require('express');
const homeRouter = require('./routes/HomeRoutes');

// Set up app
const app = express();

// Set up middlewares
app.use(express.static(path.resolve(__dirname, './client/build')));
app.use(express.json());

// Set up routes
app.use('/', homeRouter);
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

// Set up listener
app.listen(3000, () => {
    console.log('Server is up and running!');
});
