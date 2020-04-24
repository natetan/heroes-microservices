const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const path = require('path');

const port = process.argv.slice(2)[0];

const app = express();
app.use(bodyParser.json());
app.use('/', routes);
app.use('/img', express.static(path.join(__dirname, 'img')));

console.log(`Heroes service listening on port ${port}`);
app.listen(port);