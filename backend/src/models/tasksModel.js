const connection = require('./connection');

// Responsavel por buscar todas as tasks no banco de dados
const getAll = async () => {
    // Variavel que salva as tasks do banco atraves de uma query
    const tasks = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

module.exports = {
    getAll
};