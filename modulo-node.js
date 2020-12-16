/*const objetoCalculo = require("./calculos");

console.log(objetoCalculo);
console.log(objetoCalculo.multiplicar(15, 8));
console.log(objetoCalculo.somar(15, 8));
console.log(objetoCalculo.regra3(15, 8, 17));*/

const { regra3, somar, dividir, multiplicar } = require("./calculos"); // usando o destruction chamando direto do obj somente o que vc precisa

console.log(multiplicar(15, 8));
console.log(somar(15, 8));
console.log(regra3(15, 8, 17));
