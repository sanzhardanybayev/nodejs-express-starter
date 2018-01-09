const express = require('express');
const colors = require('colors');
const open = require('open');

const app = express();

const server = {
  host: 'localhost',
  port: 9000
};

app.get('/', (req, res) => {
  res.send(`<h1>Hello world! It's ${ (new Date).getFullYear()} 🎄</h1>`);
});

app.listen(server.port, () => {
  open(`http://${server.host}:${server.port}`);
  console.log('Running'.green);
});