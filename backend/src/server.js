const app = require('./app');

// Import do dotenv para poder usar as vaiaveis de ambiente criadas no .env
require('dotenv').config();

// Inicia a aplicação com a porta do ambiente ou se não conseguir inicia na 3333
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));