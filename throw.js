function Exececao(mensagem) {
  this.message = mensagem;
  this.name = "Excecao";
}

function NaoNumeroException() {
  this.mensagem = "É necessário informar um número";
  this.name = "NaoNumeroException";
}

function dividir(a, b) {
  if (typeof a !== "number") {
    throw new NaoNumeroException();
    //throw "É necessário informar um numero";
  } else if (typeof b !== "number") {
    //throw "É necessário informar um numero";
    throw "è necessário";
  } else if (b == 0) {
    throw "onumero para divisão não pode ser zero";
  }

  return a / b;
}

console.log(dividir(10, 2));
console.log(dividir(50, 5));
console.log(dividir(100, 20));
console.log(dividir(100, 0));
