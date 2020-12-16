/*const paises = ["Brasil", "Peru", "Uruguai", "Paraguai", "Chile"];

paises.forEach(function (valor, indice) {
  //console.log(`Ìndice ${indice}: ${valor}`);
  //paises[indice] = `${valor} é um país`;
});

console.log(paises);

console.log(
  paises.map(function (valor, indice) {
    return `Pais: ${valor}`;
  })
);

console.log(
  paises.filter(function (valor, indice) {
    return valor.length > 5;
  })
);
*/

const notasRafael = [8, 7, 5, 6, 9, 9, 8, 7, 7, 5, 9, 9];
const notasTotal = notasRafael.reduce(function (total, notaAtual) {
  return total + notaAtual;
}, 0); //adicionar o valor para dar inicio no caso adicionamos o 0

console.log(notasTotal);
console.log(Math.ceil(notasTotal / notasRafael.length));
console.log(Math.round(notasTotal / notasRafael.length)); //Arredonda exato menos que ,5 arredonda para menos. +,5 para cima
