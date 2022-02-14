//crie um objeto com seus dados pessoais
var pessoa = {
    nome: 'Lia',
    sobrenome: 'Santos',
    idade: 27,   
}

pessoa.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`;
}

console.log(pessoa.nomeCompleto());

//crie um método no objeto anterior que mostre seu nome completo

//modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;

console.log(carro);

//crie um objeto de um cachorro que represente um labrador
//preto com 10 anos que late ao ver um homem

cachorro = {
    raça: 'Labrador',
    cor: 'preto',
    idade: 10,
    late(humano){
        if(humano === 'homem'){
            return 'Latiu!';
        } else {
            return 'Silêncio...'
        }
    }
}

console.log(cachorro.late());
console.log(cachorro.late('mulher'));
console.log(cachorro.late('homem'));