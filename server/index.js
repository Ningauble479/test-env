const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
var nameCall = require('../Routes/nameCall')

// ...


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use('/Namecall', nameCall)



app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);