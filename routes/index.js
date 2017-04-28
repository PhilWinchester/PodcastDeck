const index = require('express').Router();
const path = require('path');

// This is the route that serves your '/' homepage
index.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = index;
