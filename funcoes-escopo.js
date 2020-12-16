let idade;

const calcularIdade = function (anoNascimento) {
  idade = new Date().getFullYear() - anoNascimento;
  return idade;
};

console.log(calcularIdade(2002));
console.log(idade);
