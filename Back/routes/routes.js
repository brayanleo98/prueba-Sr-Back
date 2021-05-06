const express = require('express');
const routes = require('../controller/routes.controller');
const { authenticateJWT } = require('../middleware/middleware')
const app = express();

app.post('/getMongoData', authenticateJWT, routes.find);
app.post('/getApiPoke', authenticateJWT, routes.poke);
app.get('/authenticate', routes.autenticate);
app.get('/test', authenticateJWT, routes.test);

module.exports = app;