require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');
let path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

// use JWT auth to secure the api
// app.use(jwt());

// api routes
app.use('/users', require('./users/users.controller'));

app.get('*', (req, res) => {

  res.sendFile(path.join(__dirname + '/public/index.html'));
})
// global error handler
app.use(errorHandler);

// start server
// const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
// finally, let's start our server...
let server = app.listen(process.env.PORT || 5000, function () {
  console.log('Listening on port ' + server.address().port);
});
