console.log('exercicios: ');

//função que verifica se um valor é truthy
function isTruthy(valor) {
    return !!valor;
}
console.log(isTruthy(23));

//função matematica que retorne o perímetro de um quadrado
function perimetroQuadrado(lado) {
    return lado * 4;
}
console.log(perimetroQuadrado(3));

//função que retorna seu nome completo
function nomeCompleto(sobrenome, nome) {
    return nome + ' ' + sobrenome;
}
console.log(nomeCompleto('Santos', 'Lia'));

//função que verifica se um número é par
function isEven(numero) {
    var modulo = numero % 2;
    if (modulo !== 0) {
        return false;
    } else {
        return true;
    }
}
console.log(isEven(4));

//função que retorna o tipo de dado do arg passado nela
function tipoDeDado(dado) {
    return typeof dado;
}
console.log(tipoDeDado('oi'));

//addEventListener para mostrar nome completo quando scroll ocorrer
addEventListener('scroll', function() {
    console.log('Lia Santos');
})