const express = require('express');
const tasksController = require('./controllers/tasksController');

const router = express.Router();

// Rota com endpoint tasks que executa um controller
router.get('/tasks', tasksController.getAll);

module.exports = router;