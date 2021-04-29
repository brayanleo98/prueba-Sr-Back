const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {jwt} = require('./middleware/middleware');
const routes = require('./routes/routes');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({
    origin: '*'
}));


app.use('/api', routes);

module.exports = app;