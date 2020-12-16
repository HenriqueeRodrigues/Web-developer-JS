// var x let - Hoisting
let produto = "PS5";
var outroProduto = "Xbox Series X";

//console.log(produto);
//console.log(outroProduto);

//var x let - Escopo

let numero = 25;
let numero2 = 20;

const carros = ["ferrari", "Porshe", "Gurgel"];

//const carros
//carros = ["ferrari", "porshe", "Gurgel"];

numero2 += 5;

if (numero > numero2) {
  var mensagem = "Ola Hcode"; // nesse caso como o let nao tem o hoisting, nao vai funcionar, o var funciona e por isso deixa o codigo muito mais pesado.
}

console.log(carros);
