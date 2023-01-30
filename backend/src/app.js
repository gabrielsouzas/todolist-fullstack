const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();

// Para a API conseguir trabalhar com dados em json
app.use(express.json());
app.use(cors());
app.use(router);

module.exports = app;