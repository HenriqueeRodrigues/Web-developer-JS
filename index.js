/**
 * Abaixo vemos duas váriaveis que serão usadas para realizar um cálculo
 * Os valores precisam ser numero inteiros
 * Use a função calcular()
 */
let a = 1;

let b = 2;

console.log(a * b);

function calcular(numero1, numero2, operador) {
  return eval(`${numero1} ${operador} ${numero2}`);
}

//console.log(calcular(1, 2));
//console.log(calcular(5, 15));
//console.log(calcular(127, 355));

console.log(calcular(50, 150, "-"));
console.log(calcular(320, 10, "/"));
