const express = require('express');
const router = require('./router');

const app = express();

// Para a API conseguir trabalhar com dados em json
app.use(express.json());

app.use(router);

module.exports = app;