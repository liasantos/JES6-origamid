// JavaScript Assíncrono
// New Promise()
// Promise é uma função construtora de promessas. Existem dois resultados possíveis
// de uma promessa, ela pode ser resolvida, com a execução do primeiro argumento, ou
// rejeitada se o segundo argumento for ativado.

const promessa = new Promise(function (resolve, reject) {
  let condicao = true;
  if (condicao) {
    resolve();
  } else {
    reject();
  }
});

console.log(promessa); // Promise {<resolved>: undefined}

// Resolve()
// Podemos passar um argumento na função resolve(), este será enviado junto com a resolução da Promise.

const promessaResolve = new Promise(function (resolve, reject) {
  let condicao = true;
  if (condicao) {
    resolve("Estou pronto!");
  } else {
    reject();
  }
});

console.log(promessaResolve); // Promise {<resolved>: "Estou pronto!"}

// Reject()
// Quando a condição de resolução da promise não é atingida, ativamos a função reject para rejeitar a
// mesma. Podemos indicar no console um erro, informando que a promise foi rejeitada.

const promessaReject = new Promise(function (resolve, reject) {
  let condicao = false;
  if (condicao) {
    resolve("Estou pronto!");
  } else {
    reject(Error("Um erro ocorreu."));
  }
});

console.log(promessaReject); // Promise {<rejected>: Error:...}

// Then()
// O poder das Promises está no método then() do seu protótipo. O Callback deste método só será ativado
// quando a promise for resolvida. O argumento do callback será o valor passado na função resolve.

const promessaThen = new Promise(function (resolve, reject) {
  let condicao = true;
  if (condicao) {
    resolve("Estou pronto!");
  } else {
    reject(Error("Um erro ocorreu."));
  }
});

promessaThen.then(function (resolucao) {
  console.log(resolucao); // 'Estou pronto!'
});

// Assíncrono
// As promises não fazem sentido quando o código executado dentro da mesma é apenas código síncrono.
// O poder está na execução de código assíncrono que executará o resolve() ao final dele.

const promessaAsync = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolvida");
  }, 1000);
});

promessaAsync.then((resolucao) => {
  console.log(resolucao); // 'Resolvida' após 1s
});

// Then().Then()
// O método then() retorna outra Promise. Podemos colocar then() após then() e fazer um encadeamento
// de promessas. O valor do primeiro argumento de cada then, será o valor do retorno anterior.

const promessaThenThen = new Promise((resolve, reject) => {
  resolve("Etapa 1");
});

promessaThenThen
  .then((resolucao) => {
    console.log(resolucao); // 'Etapa 1';
    return "Etapa 2";
  })
  .then((resolucao) => {
    console.log(resolucao); // 'Etapa 2';
    return "Etapa 3";
  })
  .then((r) => r + 4)
  .then((r) => {
    console.log(r); // Etapa 34
  });

// Catch()
// O método catch(), do protótipo de Promises, adiciona um callback a promise que será ativado
// caso a mesma seja rejeitada.

const promessaCatch = new Promise((resolve, reject) => {
  let condicao = false;
  if (condicao) {
    resolve("Estou pronto!");
  } else {
    reject(Error("Um erro ocorreu."));
  }
});

promessaCatch
  .then((resolucao) => {
    console.log(resolucao);
  })
  .catch((reject) => {
    console.log(reject);
  });

// Then(Resolve, Reject)
// Podemos passar a função que será ativada caso a promise seja rejeitada, direto no método then,
// como segundo argumento.

const promessaResRej = new Promise((resolve, reject) => {
  let condicao = false;
  if (condicao) {
    resolve("Estou pronto!");
  } else {
    reject(Error("Um erro ocorreu."));
  }
});

promessaResRej.then(
  (resolucao) => {
    console.log(resolucao);
  },
  (reject) => {
    console.log(reject);
  }
);

// Finally()
// finally() executará a função anônima assim que a promessa acabar. A diferença do finally
// é que ele será executado independente do resultado, se for resolvida ou rejeitada.

const promessaFinally = new Promise((resolve, reject) => {
  let condicao = false;
  if (condicao) {
    resolve("Estou pronto!");
  } else {
    reject(Error("Um erro ocorreu."));
  }
});

promessaFinally
  .then(
    (resolucao) => {
      console.log(resolucao);
    },
    (reject) => {
      console.log(reject);
    }
  )
  .finally(() => {
    console.log("Acabou"); // 'Acabou'
  });

// Promise.All()
// Retornará uma nova promise assim que todas as promises dentro dela forem resolvidas ou
// pelo menos uma rejeitada. A reposta é uma array com as respostas de cada promise.

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Login Efetuado");
  }, 1000);
});
const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados Carregados");
  }, 1500);
});

const tudoCarregado = Promise.all([login, dados]);

tudoCarregado.then((respostas) => {
  console.log(respostas); // Array com ambas respostas
});

// Promise.Race()
// Retornará uma nova promise assim que a primeira promise for resolvida ou rejeitada.
// Essa nova promise terá a resposta da primeira resolvida.

const loginRace = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Login Efetuado");
  }, 1000);
});
const dadosRace = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados Carregados");
  }, 1500);
});

const carregouPrimeiro = Promise.race([loginRace, dadosRace]);

carregouPrimeiro.then((resposta) => {
  console.log(resposta); // Login Efetuado
});
