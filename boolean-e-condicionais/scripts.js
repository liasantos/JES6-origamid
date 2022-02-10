//boolean - true ou false
//condicional if else

var possuiGraduacao = true;
var possuiDoutorado = false;

if(possuiDoutorado){
    console.log('Possui graduação e doutorado');
} else if(possuiGraduacao) {
    console.log('Possui graduação');
} else {
    console.log('Não possui graduação');
} 

//Truthy e Falsy
//Falsy
//if(false)
//if(0) // ou -0
//if(NaN)
//if(null)
//if(undefined)
//if('') // ou "" ou `` - sem espaço entre
//todo o resto é truthy
//exemplo
var nome = '';
if(nome) {
    console.log(nome);
} else {
    console.log('Nome não existe');
} //retorna Nome não existe

//Truthy
//if(true)
//if(1)
//if(' ') // com espaço entre
//if('lia')
//if(-5)
//if({})

//operador de negação
// ! na frente da expressão
//para verificar se é truthy ou falsy !! na frente