// Este arquivo é responsável pela validação dos dados que serão transmitidos ao banco de dados, ou seja, do front para o back

const validateFieldTitle = (request, response, next) => {
    // Extrai o body da requisição
    const { body } = request;

    // Verifica se o title foi passado corretamente
    if (body.title === undefined) {
        // Retorna uma mensagem caso o title não seja passado
        return response.status(400).json({ message: 'The field "title" is required.'});
    }

    // Verifica se o title foi passado corretamente
    if (body.title === '') {
        // Retorna uma mensagem caso o title esteja vazio
        return response.status(400).json({ message: 'The field "title" cannot be empty.'});
    }

    // Se estiver tudo correto passa para o próximo middleware
    next();
};

const validateFieldStatus = (request, response, next) => {
    // Extrai o body da requisição
    const { body } = request;

    // Verifica se o status foi passado corretamente
    if (body.status === undefined) {
        // Retorna uma mensagem caso o status não seja passado
        return response.status(400).json({ message: 'The field "status" is required.'});
    }

    // Verifica se o status foi passado corretamente
    if (body.status === '') {
        // Retorna uma mensagem caso o status esteja vazio
        return response.status(400).json({ message: 'The field "status" cannot be empty.'});
    }

    // Se estiver tudo correto passa para o próximo middleware
    next();
};

// Exporta o conteudo do arquivo para uso externo
module.exports = {
    validateFieldTitle,
    validateFieldStatus,
};