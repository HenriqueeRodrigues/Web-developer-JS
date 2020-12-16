const usuario = {
  nome: "glaucio",
  email: "glaucio@gmail.com",
  senha: "123456",
};

const pessoa = {
  nome: "Glaucio Daniel",
  idade: 50,
};

const uniao = Object.assign(usuario, pessoa, {
  //conflito tem aqui pq tem 2 nomes, o objeto da direita sempre tera preferencia
  nome: "Glaucio Daniel dos Santos",
});
//console.log(uniao); modelo assign

console.log(Object.keys(uniao));

Object.keys(uniao).forEach(function (chave) {
  console.log(uniao[chave]); //estou pedindo a informação da chave e não a chave.
});

console.log("======================");

for (let chave in uniao) {
  //msm resultado porem essa parte aqui é mais antiga, de preferencia usar a de cima
  console.log(uniao[chave]);
}
