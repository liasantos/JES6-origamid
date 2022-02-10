//funções

function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(2));

function pi() {
    return 3.14;
}

var total = 5 * pi();
console.log(total);

//Parâmetros e Argumentos
//ao criar função, define-se parâmetros
//ao executar, passa-se argumentos

function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}

console.log('imc é: ' + imc(80, 1.80));
console.log('imc é: ' + imc(60, 1.70));

function corFavorita(cor) {
    if(cor === 'Azul') {
        return 'É Azul';
    } else if(cor === 'Verde') {
        return 'É Verde';
    } else {
        return 'Nada';
    }
}

console.log(corFavorita());
console.log(corFavorita('Verde'))

//argumentos podem ser funções
//chamadas de callback geralmente são funções
//que ocorrem após algum evento

addEventListener('click', function() {
    console.log('Clicou');
});
//a função acima possui dois argumentos
//1- string 'click'
//2- função anônima
//nota: funções anônimas são aquelas em que o nome 
//da função não é definido, escritos como 
//function(){} ou ()=>{}