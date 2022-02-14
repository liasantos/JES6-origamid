//objetos
//conjunto de variáveis e funções, chamadas props e métodos

var pessoa = {
    nome: 'André',
    idade: 28,
    profissao: 'Designer',
    possuiFaculdade: true,
}

pessoa.nome; //André
pessoa.possuiFaculdade; //true

console.log(pessoa);

var quadrado = {
    lados: 4,
    //area: function(lado) {
    area(lado){
        return lado * lado;
    },
    //perimetro: function(lado){
    perimetro(lado){
        return this.lados * lado;
    },
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

//objetos organizam o código em pequenas partes reutilizáveis