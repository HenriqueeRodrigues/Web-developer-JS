//Declaração de uma função
darBoasVindas("João", "Hcode Lab");
darBoasVindas("Antony", "Hcode CAfé");

function darBoasVindas(nome, evento = "Hcode  LAB") {
  console.log(`Seja Bem vindo ${nome} ao ${evento}`);
}

// Expressão de função
const darAdeus = function (nome) {
  console.log(`Até a próxima${nome}`);
};

darAdeus("Henrique");
darAdeus("Henrique");

//diferença entre os 2 qe a 1º é=sofre aquele esquema de hoinsting, idnependeten de onte a chamada estivver ele vai funcionar
