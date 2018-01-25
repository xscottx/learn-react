const express = require('express');
const app = express();  // create express app
const path = require('path');
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;  // pull port from heroku or default to 3000

// middleware: something that is run in between requests
app.use(express.static(publicPath));  // use public directory for assets

// if start in unknown page, then serve up index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
})

// start on port
app.listen(port, () => {
  console.log('Server is up!');
});