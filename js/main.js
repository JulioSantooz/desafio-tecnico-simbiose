/*Inicio das variaveis globais*/
let listaDeItens = [];
let nome_global = '';
let email_global = '';
/*Fim das variaveis globais*/

/* Inicio Axios (esta servindo para pegar os dados da API)*/
const url = "https://randomuser.me/api/";

function getResults() {
    axios.get(url)
    .then(response => {
        let dataName = response.data.results[0].name.first;
        let dataEmail = response.data.results[0].email;

        nome_global = dataName;
        email_global = dataEmail;
        createItem(dataName, dataEmail)
        //updateItem(dataName, dataEmail)
    })
    .catch(error => console.log(error))
    
}
/* Fim Axios */


/*Inicio da funcao Create*/
function createItem(nome,email) {

    let novoItem = {
        id: '',
        nomeItem: document.querySelector('#nomeItem').value,
        nome: nome,
        email: email,
        valorItem: document.querySelector('#valorItem').value
    }

    addToList(novoItem)
    
}

function addToList(item) {

    console.log(item);
    
    listaDeItens.push(item);
    item.id = listaDeItens.length;

    let tr = document.createElement('tr')
    tr.setAttribute('id', item.id) 

    tr.innerHTML = `
        <td>${item.id}</td>
        <td>${item.nomeItem}</td>
        <td>${item.nome}</td>
        <td>${item.email}</td>
        <td>${item.valorItem}</td>
        <td>
            <button class="button-confirm" onclick="updateItem(${item.id})">Atualizar</button>
        </td>
        <td>
            <button class="button-confirm" onclick="deleteItem(${item.id})">Deletar</button>
        </td>
    `
    tbody.appendChild(tr)

    toString();

}
/*Fim da funcao Create*/

/*Inicio da funcao delete*/
function deleteItem(id) {

    let table = document.getElementById('tbody');
    let row = document.getElementById(id);
    table.removeChild(row);

}

function aparTudo() {

    let rows = document.getElementById('tbody').getElementsByTagName('tr');

    while( rows.length > 0 ) {
        rows[0].remove();
    }
    
}
/*Fim da funcao delete*/ 

/*Inicio da funcao update*/
function updateItem(id) {

    let novoItem = {
        id: id,
        nomeItem: document.querySelector('#nomeItem').value,
        nome: nome_global, 
        email: email_global,
        valorItem: document.querySelector('#valorItem').value
    }
    
    addUpdateToList(novoItem)

}

function addUpdateToList(item) {

    let tr = document.createElement('tr')
    tr.setAttribute('id', item.id)

    tr.innerHTML = `
        <td>${item.id}</td>
        <td>${item.nomeItem}</td>
        <td>${item.nome}</td>
        <td>${item.email}</td>
        <td>${item.valorItem}</td>
        <td>
            <button class="button-confirm" onclick="updateItem(${item.id})">Atualizar</button>
        </td>
        <td>
            <button class="button-confirm" onclick="deleteItem(${item.id})">Deletar</button>
        </td>  
    `
    tbody.appendChild(tr)

    deleteItem(item.id)

}
/*Fim da funcao update*/
