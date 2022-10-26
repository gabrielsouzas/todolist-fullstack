# todolist-fullstack
 App para estudo do Node.js


### Rodar app

Acesse a pasta backend utilizando o terminal e execute o comando:

~~~~cmd
npm run dev
~~~

### Criar database todolist

- Acesse a extensão Database Client e clique em Create Connection;
- Preencha os campos usuário e porta;
- Clique em Connect;
- Clique no + na conexão criada e digite as linhas:

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

- Selecione todas as linhas e aperte Ctrl+ENTER para executar;

