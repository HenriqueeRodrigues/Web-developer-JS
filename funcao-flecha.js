const exibirNome = function (nome) {
  console.log(nome);
};

const exibirSobreNome = (sobrenome) => {
  console.log(sobrenome);
};

//exibirNome("Henrique");
//exibirSobreNome("Rodrigues");

const pessoas = ["Geise", "João", "Sara"];

const nomesInvertidos = pessoas.map((nome) =>
  nome.split("").reverse().join("")
);

console.log(nomesInvertidos);
