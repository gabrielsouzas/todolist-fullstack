# todolist-fullstack
 App para estudo do **Node.js** com os videos do canal do **Youtube**: **[Manual do Dev](https://exemplo.com/)**.
 
**Acesse o canal para os videos:** <http://youtube.com/manualdodev>.
</br>
**Github do Manual do Dev:** <https://github.com/manualdodev>.

## Documentação dos procedimentos realizados (Em andamento)

### Criar a pasta do projeto e instalar o app com Node.js

Crie a pasta todolist-fullstack, abra com o VSCode e no Terminal execute o comando:

~~~CMD
npm install todolist-fullstack
~~~

### Criar a estrutura de pastas com os arquivos

* backend
  * src
    * controllers
      * tasksController.js
    * middlewares
      * tasksMiddleware.js
    * models
      * connection.js
      * tasksModel.js
    * app.js
    * router.js
    * server.js
  * .env.example
  * package-lock.json
  * package.json

### Rodar app

Acesse a pasta backend utilizando o terminal e execute o comando:

~~~~cmd
npm run dev
~~~~

### Criar database todolist

1. Acesse a extensão Database Client e clique em Create Connection;
2. Preencha os campos usuário e porta;
3. Clique em Connect;
4. Clique no + na conexão criada e digite as linhas:

~~~SQL
CREATE DATABASE IF NOT EXISTS todolist;

USE todolist;

CREATE TABLE tasks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    status VARCHAR(45) NOT NULL,
    created_at VARCHAR(45) NOT NULL
);
~~~

5. Selecione todas as linhas e aperte Ctrl+ENTER para executar;

### Criação do Front-end

1. Liberando e controlando acesso Client da aplicação

Acesse a pasta backend no terminal:

~~~~cmd
cd backend/
~~~~

Instale a dependência cors:

~~~~cmd
npm install cors
~~~~

