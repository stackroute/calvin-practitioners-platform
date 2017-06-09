const express = require('express');
const path = require('path');

const app = express();

const clientPath = path.resolve(__dirname, '..', 'dist');

app.use(express.static(clientPath));

app.get('/hello', (req, res) => res.send({ msg: 'Howdy partner ' }));

app.get('/welcome', (req, res) => {
  res.send({ msg: 'Welcome to app' });
});

app.get('/users', (req, res) => {
  res.send({ msg: 'welcomes users' });
});

app.use((req, res) => {
  res.status(404).send({ error: 'Resource not found' });
});

module.exports = app;
