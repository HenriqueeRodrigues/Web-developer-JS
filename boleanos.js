const valor1 = true;
const valor2 = false;

const desconto = Boolean(0);
const descontoBlackFriday = Boolean(50);

const nome = Boolean("");
const a = Boolean(null);
const b = Boolean(undefined);

console.log("valor1", typeof valor1, valor1);
console.log("valor2", typeof valor2, valor2);
console.log("desconto", desconto);
console.log(
  "descontoBlackFriday",
  typeof descontoBlackFriday,
  descontoBlackFriday
);

console.log("nome", typeof nome, nome);
console.log("a", typeof a, a);
console.log("b", typeof b, b);
