const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');

const port = process.argv.slice(2)[0];

const app = express();
app.use(bodyParser.json());
app.use('/', routes);
app.use('/img', express.static(path.join(__dirname, 'img')));

console.log(`Threats service listening on port ${port}`);
app.listen(port);