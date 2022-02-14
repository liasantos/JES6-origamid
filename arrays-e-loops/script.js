//Array
//grupo de valores geralmente relacionado

var videoGames = ['Switch', 'PS4', 'Xbox'];
videoGames[0]; //Switch
videoGames[2]; //Xbox

//metodos e props de Array
console.log(videoGames.pop()); //remove ultimo item e o retorna
console.log(videoGames.push('3DS')); //adiciona ao final
console.log(videoGames); //['Switch', 'PS4', '3DS']
console.log(videoGames.length); //3

//For loop
//inicio meio(condição) fim
for (var numero = 0; numero < 5; numero++) {
    console.log('numero eh ' + numero);
}

//While Loop
var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

//loops e arrays

var cores = ['vermelho', 'verde', 'azul', 'amarelo'];

for (var item = 0; item < cores.length; item++) {
    console.log(cores[item]);
}

for (var item = 0; item < cores.length; item++) {
    console.log(cores[item]);
    if (cores[item] === 'azul') {
        break;
    }
}

//forEach
//executa uma função pra cada item da array

var frutas = ['banana', 'pera', 'maça', 'uva'];
frutas.forEach(function (item, index, array) {
    console.log(item, index, array);
});
//argumento item é atribuido dinamicamente
//pode passar parametros item, index, array

