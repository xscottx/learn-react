const express = require('express');
const app = express();  // create express app
const path = require('path');
const publicPath = path.join(__dirname, '..', 'public');

// middleware: something that is run in between requests
app.use(express.static(publicPath));  // use public directory for assets

// if start in unknown page, then serve up index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
})

// start on port 3000
app.listen(3000, () => {
  console.log('Server is up!');
});