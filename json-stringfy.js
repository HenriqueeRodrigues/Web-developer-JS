const pessoa = {
  primeiroNome: "Glaucio",
  ultimoNome: "Santos",
  linguagensFavoritas: ["PHP", "JavaScript", "Java"],
  idade: 50,
  mostrarNomeCompleto: function () {
    return `${this.primeiroNome} ${this.ultimoNome}`; //JSON.stringify não suporta converter funções ou metodos
  },
};

console.log(pessoa);
console.log(pessoa.mostrarNomeCompleto());
console.log(JSON.stringify(pessoa)); //converte  em string para a aceitação de protocolo http
