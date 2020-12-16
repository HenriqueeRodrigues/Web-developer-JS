const diaDaSemana = 9; //new Date().getDay(); // dia da semana 0 domingo 7 sabado e etc...

console.log(diaDaSemana);

switch (diaDaSemana) {
  case 2:
    console.log("Terça");
    break;
  case 1:
    console.log("Quarta");
    break;
  default:
    console.log("Este dia mão esxiste");
}
