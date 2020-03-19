const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.use(routes);

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});

module.exports = app