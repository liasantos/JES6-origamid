// Exercicios

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const inputCep = document.getElementById("cep");
const btnCep = document.getElementById("btnCep")
const resultadoCep = document.querySelector(".resultadoCep")

btnCep.addEventListener('click', handleClick); //keyup ao invés de click muda na hora

function handleClick(event) {
    event.preventDefault();
    const cep = inputCep.value;
    buscaCep(cep);
    //console.log(event);
}

function buscaCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.text())
    .then(body => {
        resultadoCep.innerText = body;
    })
}
// buscaCep(96745000); //chamada de função pra teste

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
