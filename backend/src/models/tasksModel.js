const connection = require('./connection');

// Responsavel por buscar todas as tasks no banco de dados
const getAll = async () => {
    // Variavel que salva as tasks do banco atraves de uma query
    /* [tasks] - Usado para fazer o destructor, ou seja, pega apenas o primeiro array da variavel retornada, pois nesse caso está retornando um buffer na segunda posição que não será necessário*/
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

// Método que insere uma task no bd
const createTask = async (task) => {

    // Pega apenas o title da task
    const { title } = task;

    // Tratamento da data
    // Pega a data atual e transforma em UTC
    const dateUTC = new Date(Date.now()).toUTCString();

    // Insere os dados da task no banco
    const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)';
    const [createdTask] = await connection.execute(query, [title, 'pendente', dateUTC]);

    // Retorna apenas o ID inserido
    return {insertId: createdTask.insertId};
}

// Método que deleta uma task do bd
const deleteTask = async (id) => {
    const [removedTask] = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
    return removedTask;
};

// Método que atualiza uma task do bd
const updateTask = async (id, task) => {

    // Pega o title e o status da task passada
    const { title, status } = task;

    const [updatedTask] = await connection.execute('UPDATE tasks SET title = ?, status = ? WHERE id = ?', [title, status, id]);
    return updatedTask;
};

// Exporta as funções para usar em outros lugares
module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
};