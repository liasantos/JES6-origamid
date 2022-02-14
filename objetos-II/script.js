//tudo é objeto em js

//string herda props e métodos do construtor String()
var objeto = 'Bananinha';
console.log(objeto.length); //9
console.log(objeto.charAt(4)); //n
console.log(objeto.replace('inha', 'a')); //Banana
console.log(objeto); //Bananinha
console.log(objeto.toLowerCase()); //bananinha
console.log(objeto.toUpperCase()); //BANANINHA

//por um breve momento o numero é envolvido em um objeto (coerção)
//tendo acesso as suas propriedades e métodos
var altura = 1.8;
console.log(altura.toString()); // '1.8'
var testaTipo = altura.toFixed(); // '2' arredonda valor
console.log(testaTipo); // '2'
console.log(typeof testaTipo); // string

//intro DOM

var btn = document.querySelector('.btn'); //retorna um seletor css
btn.classList.add('azul'); //adiciona classe azul
console.log(btn.innerText); //'Clique'
btn.addEventListener('click', function(){
    console.log('Clicou');
})