# todolist-fullstack
 App para estudo do **Node.js** com os videos do canal do **Youtube** **Manual do Dev**.
 
Acesse o canal para os videos: <http://youtube.com/manualdodev>.
</br>
Github do Manual do Dev: <https://github.com/manualdodev>.


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

