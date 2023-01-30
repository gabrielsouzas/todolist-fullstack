# todolist-fullstack
>App para estudo do **Node.js** com os videos do canal do Youtube **[Manual do Dev](https://www.youtube.com/@ManualdoDev)**.
 
**Acesse o canal para os videos:** <http://youtube.com/manualdodev>.
</br>
**Github do Manual do Dev:** <https://github.com/manualdodev>.

# Documentação dos procedimentos realizados (Em andamento)

## Criar a pasta do projeto e instalar o app com Node.js

<br>

Crie a pasta todolist-fullstack, abra com o VSCode e no Terminal execute o comando:

~~~CMD
npm install todolist-fullstack
~~~

## Criar a estrutura de pastas com os arquivos

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

## Rodar a aplicação

<br>

Acesse a pasta backend utilizando o terminal e execute o comando:

~~~~cmd
npm run dev
~~~~

## Criar a base de dados

**1º.** *Acesse a extensão **Database Client** e clique em **Create Connection**;*<br>
**2º**. *Preencha os campos **usuário** e **porta**;*<br>
**3º**. *Clique em **Connect**;*<br>
**4º**. *Clique no **+** na conexão criada e digite as linhas:*

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

**5º.** *Selecione todas as linhas e aperte **Ctrl+ENTER** para executar;*

## Criação do Front-end

Liberando e controlando acesso Client da aplicação

Acesse a pasta backend no terminal:

~~~~cmd
cd backend/
~~~~

Instale a dependência cors:

~~~~cmd
npm install cors
~~~~

