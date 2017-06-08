const express = require('express');
const path = require('path');

app = express();

let clientPath = path.resolve(__dirname, '..', 'dist');
console.log('Hosting static path ', clientPath);
app.use(express.static(clientPath));

app.get('/hello', (req, res) => {
  return res.send({msg:'Howdy partner '});
})

app.get('/welcome', (req, res) => {
  res.send({msg: 'Welcome to app'});
})

app.use((req, res) => {
  res.status(404).send({error: 'Resource not found'});
})

module.exports = app;