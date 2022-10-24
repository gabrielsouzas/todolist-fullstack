const tasksModel = require('../models/tasksModel');

const getAll = async (request, response) => {
    // Executa o método select do model
    const tasks = await tasksModel.getAll();
    return response.status(200).json(tasks)
};

module.exports = {
    getAll
};