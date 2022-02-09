var nome = 'Lia',
    idade = 27,
    simbolo = Symbol();
console.log(typeof nome, typeof idade, typeof simbolo);

var nome = 'Ian ',
    sobrenome = 'Santos',
    nomeCompleto = nome + sobrenome;

console.log(nomeCompleto);

var gols = 1000,
    frase = 'Romário fez ' + gols + ' gols';

console.log(frase);
console.log(typeof frase);

var frase1 = 'Javascript é "super" fácil', //valido
    frase2 = "Javascript é 'super' fácil", //valido
    frase3 = "Javascript é \"super\" fácil"; //valido

    console.log(frase1);
    console.log(frase2);
    console.log(frase3);

// template string
var frase4 = `Romário fez ${gols} gols`;
console.log(frase4);

var frase5 = `Romário fez ${gols * 2} gols`;
console.log(frase5);