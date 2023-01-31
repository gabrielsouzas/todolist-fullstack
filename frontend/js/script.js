const tbody = document.querySelector('tbody');
const addForm = document.querySelector('.add-form');
const inputTask = document.querySelector('.input-task');

// Método de busca das tasks
const fetchTasks = async () => {
    // Resposta do endpoint das tasks
    const response = await fetch('http://localhost:3333/tasks');
    // Pega apenas o json da resposta
    const tasks = await response.json();
    return tasks;
}

// Adicionar uma nova task
const addTask = async (event) => {
    event.preventDefault();

    const task = { title: inputTask.value };

    await fetch('http://localhost:3333/tasks', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
    });

    loadTasks();
    inputTask.value = '';
}

// Formatar data
const formatDate = (dateUTC) => {
    const options = { dateStyle: 'long', timeStyle: 'short' };
    const date = new Date(dateUTC).toLocaleString(options);
    return date;
}

// Cria um elemento html passando ou não o parametro innerText e innerHtml
const createElement = (tag, innerText = '', innerHTML = '') => {
    const element = document.createElement(tag);
    
    if (innerText) {
        element.innerText = innerText;
    }

    if (innerHTML) {
        element.innerHTML = innerHTML;
    }

    return element;
}

// Criar apenas o elemento select
const createSelect = (value) => {
    const options = `
        <option value="pendente">pendente</option>
        <option value="em andamento">em andamento</option>
        <option value="concluida">concluida</option>
    `;

    const select = createElement('select', '', options);

    select.value = value;
    
    return select;
}

const createRow = (task) => {

    // Destruct das tasks para pegar suas variaveis
    const { id, title, created_at, status } = task;

    // Trs e tds
    const tr = createElement('tr');
    const tdTitle = createElement('td', title);
    const tdCreatedAt= createElement('td', created_at);
    const tdStatus= createElement('td');
    const tdActions= createElement('td');

    // Select
    const select = createSelect(status);
    
    // Botoes
    const editButton = createElement('button', '', '<span class="material-symbols-outlined">edit</span>');
    const deleteButton = createElement('button', '', '<span class="material-symbols-outlined">delete</span>');

    editButton.classList.add('btn-action');
    deleteButton.classList.add('btn-action');

    // Adicão botoes e select aos seus elementos pais
    tdActions.appendChild(editButton);
    tdActions.appendChild(deleteButton);

    tdStatus.appendChild(select);

    // Montagem estrutura
    tr.appendChild(tdTitle);
    tr.appendChild(tdCreatedAt);
    tr.appendChild(tdStatus);
    tr.appendChild(tdActions);

    return tr;
}

// Carregar as tasks na tela
const loadTasks = async () => {
    const tasks = await fetchTasks();
    
    tbody.innerHTML = '';

    tasks.forEach((task) => {
        const tr = createRow(task);
        tbody.appendChild(tr);
    });
}

addForm.addEventListener('submit', addTask);

loadTasks();
