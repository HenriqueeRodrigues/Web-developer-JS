const calcularIdade = function (anoNascimento) {
  const idade = new Date().getFullYear() - anoNascimento;

  return idade;
};

console.log(`Voce Tem, ${calcularIdade(2002)} idade`);
