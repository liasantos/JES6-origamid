//numeros
var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000
//nota: numero apos e = numero de zeros

//operadores aritmeticos
var soma = 100 + 50,
    subtracao = 100 - 50,
    multiplicacao = 100 * 2,
    divisao = 100 / 2,
    expoente = 2 ** 4,
    modulo = 14 % 5; //resto da divisão
    //nota: soma + em Strings é concatenação

//op. aritmeticos e Strings
var soma = '100' + 50; //10050
var subtracao = '100' - 50; //50
var multiplicacao = '100' * '2'; //200
var divisao = 'Compre 10' / 2; //NaN
//nota: identificar se a variavel é NaN
//usa-se a função isNaN()
//exemplo:
var testeNaN = 'Isso é 100' / 2;
console.log(isNaN(testeNaN));

//ordem importa
//multiplicação, divisão, soma, subtração
//para priorizar usa-se parenteses

//operadores unários
//op. depois
var incremento = 5;
console.log(incremento++); //5
console.log(incremento); //6
//op. antes
var incremento2 = 5;
console.log(++incremento2); //6
console.log(incremento2); //6
//vale o mesmo para decremento --x ou x--

//operadores unários Strings
var frase = 'Isso é um teste';
+frase; //NaN
-frase; //NaN

var idade2 = '28';
+idade; //28 (number)
-idade; //-28 (number)
console.log(+idade + 5); //33

var possuiFaculdade = true;
console.log(+possuiFaculdade); //1


