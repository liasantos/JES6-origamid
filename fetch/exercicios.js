// Exercicios

// Exercicio 1
// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const inputCep = document.getElementById("cep");
const btnCep = document.getElementById("btnCep");
const resultadoCep = document.querySelector(".resultadoCep");

btnCep.addEventListener("click", handleClick); //keyup ao invés de click muda na hora

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
  //console.log(event);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.text())
    .then((body) => {
      resultadoCep.innerText = body;
    });
}
// buscaCep(96745000); //chamada de função pra teste

// Exercicio 2
// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const btcDisplay = document.querySelector(".btc");

function fetchBtc() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((btcJson) => {
      //console.log(btcJson); //objeto inteiro
      //console.log("Preço de compra BRL: R$ " + btcJson.BRL.buy); //acessando objeto
      btcDisplay.innerText = ("R$ " + btcJson.BRL.buy).replace(".", ",");
    });
}

// setInterval(fetchBtc, 1000 * 30);

fetchBtc();

// Exercicio 3
// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const btnProxima = document.querySelector(".proxima");
const paragrafoPiada = document.querySelector(".piada");

function puxarPiada() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((piada) => {
      //console.log(piada.value);
      paragrafoPiada.innerText = piada.value;
    });  
}

puxarPiada();

btnProxima.addEventListener("click", puxarPiada);
