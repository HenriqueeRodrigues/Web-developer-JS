const calcularIdade = function (anoNascimento, callback) {
  setTimeout(callback, 5000);

  return new Date().getFullYear() - anoNascimento;
};

console.log(
  calcularIdade(2002, function () {
    console.log("A funcão anonima foi chamada!");
  })
);

//console.log(calcularIdade(1995));

(function () {
  console.log("Ola Hcode, seja muito bem vinda");
})();
