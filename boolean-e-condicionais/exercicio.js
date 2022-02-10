console.log('Exercicio: ');

//compare idades
var minhaIdade = 27;
var idadeIrma = 19;

if(minhaIdade > idadeIrma) {
    console.log('É maior')
} else if (minhaIdade === idadeIrma) {
    console.log('É igual')
} else {
    console.log('É menor')
}
//qual valor é retornado da seguinte expressão
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

//verifique se é Truthy ou Falsy
var nome = 'Lia';
var idade = 27;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

