const cookieParser = require('cookie-parser');

const morgan = require('morgan');

const bodyParser = require('body-parser');

const passport = require('passport');

const express = require('express');

const path = require('path');

const app = express();

require('./api/v1/modules/login/strategy/google/passport.js')(passport);

app.use(morgan('dev'));

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions

const clientPath = path.resolve(__dirname, '..', 'dist');

app.use(express.static(clientPath));

app.use('/api/v1', require('./api/v1'));

app.use((req, res) => {
  res.status(404).send({ error: 'resource not found' });
});

module.exports = app;
