// ASYNC / AWAIT
// A palavra chave async indica que a função possui partes assíncronas e que
// você pretende esperar a resolução da mesma antes de continuar. O await irá indicar
// a promise que devemos esperar. Faz parte do ES8.

async function puxarDados() {
  const dadosResponse = await fetch("./dados.json");
  const dadosJSON = await dadosResponse.json();
  // console.log(dadosJSON);

  document.body.innerText = dadosJSON.aula;
}

puxarDados();

// THEN / ASYNC
// A diferença é uma sintaxe mais limpa.

function iniciarFetch() {
  fetch("./dados.json")
    .then((dadosResponse) => dadosResponse.json())
    .then((dadosJSON) => {
      console.log(dadosJSON);
      document.body.innerText = dadosJSON.aula;
    });
}
iniciarFetch();

async function iniciarAsync() {
  const dadosResponse = await fetch("./dados.json");
  const dadosJSON = await dadosResponse.json();
  console.log(dadosJSON.aula);
  document.body.innerText = dadosJSON.aula;
}
iniciarAsync();

// TRY / CATCH
// Para lidarmos com erros nas promises, podemos utilizar o try e o catch na função.

async function puxarDados() {
  try {
    const dadosResponse = await fetch("./dados.json");
    const dadosJSON = await dadosResponse.json();
    document.bodyy.innerText = dadosJSON.tempo;
  } catch (erro) {
    console.log("Erro: " + erro);
  }
}
puxarDados();

// INICIAR FETCH AO MESMO TEMPO
// Não precisamos esperar um fetch para começarmos outro. Porém precisamos esperar a
// resposta resolvida do fetch para transformarmos a response em json.

async function iniciarAsync() {
  const responseDados = fetch("./dados.json");
  const responseClientes = fetch("./clientes.json");

  // ele espera o que está dentro da expressão () ocorrer primeiro
  const jsonDados = await (await responseDados).json();
  const clientesJSON = await (await responseClientes).json();

  console.log(jsonDados);
  console.log(clientesJSON);
}
iniciarAsync();

// PROMISE
// O resultado da expressão à frente de await tem que ser uma promise. E o retorno do
// await será sempre o resultado desta promise.

async function asyncSemPromise() {
  // Console não irá esperar.
  await setTimeout(() => console.log("Depois de 1segundo"), 1000);
  console.log("acabou");
}
asyncSemPromise();

// com promise irá esperar

async function iniciarAsync() {
  await new Promise((resolve) => {
    setTimeout(() => {
        console.log("Depois de 1 s");
        resolve();
    }, 1000);
  });
  console.log("Acabou!!");
}
iniciarAsync();
