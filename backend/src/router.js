const express = require('express');

const router = express.Router();

// Importações
const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');

// Rota com endpoint tasks que executa um controller
router.get('/tasks', tasksController.getAll);

// Rota para a inserção de uma nova task passando o middleware para validação dos dados enviados ao bd
router.post('/tasks', tasksMiddleware.validateFieldTitle, tasksController.createTask);

// Rota para a deletar uma task
router.delete('/tasks/:id', tasksController.deleteTask);

// Rota para a atualizar uma task
router.put('/tasks/:id', 
    tasksMiddleware.validateFieldTitle,
    tasksMiddleware.validateFieldStatus,
    tasksController.updateTask,
);

module.exports = router;