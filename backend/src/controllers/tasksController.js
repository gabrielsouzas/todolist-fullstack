const tasksModel = require('../models/tasksModel');

const getAll = async (request, response) => {
    // Executa o método select do model
    const tasks = await tasksModel.getAll();
    return response.status(200).json(tasks)
};

const createTask = async (request, response) => {
    // Executa o método createTask do Model passando o body
    const createdTask = await tasksModel.createTask(request.body);

    // Retorna um json de resposta da operação de inserção
    return response.status(201).json(createdTask);
};

const deleteTask = async (request, response) => {
    // Dos parâmetros da requisição tira o id que foi passado na URL
    const { id } = request.params;
    
    // Executa a função deleteTask passando o id capturado
    await tasksModel.deleteTask(id);

    // Retorna um status que deu certo (204)
    return response.status(204).json();
};

const updateTask = async (request, response) => {
    // Dos parâmetros da requisição tira o id
    const { id } = request.params;

    // Executa a função de atualizar passando o id passado por parâmetro na URL e os dados da task pelo body
    await tasksModel.updateTask(id, request.body);

    // Retorna um status que deu certo (204)
    return response.status(204).json();
    
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
};