const pessoa = {
  nome: "João",
  idade: 30,
};

const usuario = {
  email: "joao@hcode.com.br",
  senha: 123456,
};

console.log({ ...pessoa, ...usuario });
