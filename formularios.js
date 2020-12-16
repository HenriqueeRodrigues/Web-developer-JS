function mostrarNome() {
  if (localStorage.getItem("nome")) {
    document.getElementById(
      //dinamico do input do formulário
      "boas-vindas"
    ).innerHTML = `Seja Bem Vindo ${localStorage.getItem("nome")}`;
  }
}
function lerArquivo() {
  const arquivo = document.querySelector("[name=arquivo]");

  const leitor = new FileReader();

  leitor.onload = () => {
    document.getElementById("imagem").src = leitor.result;
  };
  if (arquivo.isDefaultNamespace.length > 0) {
    leitor.readAsDataURL(arquivo.files[0]);
  }
}

/*
const pegarDados = (event) => {
  event.preventDefault();

  const formulario = document.querySelector("form");

  const dados = {};

  [...formulario.querySelectorAll("input")].forEach((tag) => {
    console.log(tag); //converti o queryselectorall que não era um array em array por isso os pontos e colchetes para o foreach funcionar
    dados[tag.name] = tag.value;
    localStorage.setItem(tag.name, dados[tag.name]);
  });

  console.log(localStorage);
};
mostrarNome();

/*

  const form = new FormData(formulario); // tudo isso em cima é esse codigo aqui kkkk uma atualização

  console.log(form.get("nome"));
  console.log(
    form.forEach((valor, chave) => {
      console.log(valor, chave);
    })
  );
}
*/
