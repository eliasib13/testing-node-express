const express = require('express');
const app = express();

// Adding environment variables
require('dotenv').config();

// Loading router
const router = require('./router');
app.use('/', router);

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
});