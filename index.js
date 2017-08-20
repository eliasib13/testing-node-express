const express = require('express');
const app = express();

// Adding environment variables
require('dotenv').config();

app.get('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.BASE_URL || '*');
  res.send('Hello World!')
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
});