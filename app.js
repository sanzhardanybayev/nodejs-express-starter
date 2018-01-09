const express = require('express');
const colors = require('colors');
const open = require('open');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const router = express.Router();

const server = {
  host: 'localhost',
  port: 9000
};

app.use('/', router);

router.route('/')
  .get((req, res) => {
    res.send(`<h1>Welcome Home 🏠! It's ${ new Date().getFullYear() } 🎄 </h1>`);
  });

app.listen(server.port, () => {
  open(`http://${server.host}:${server.port}`);
  console.log('Running'.green);
});