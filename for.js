const numeroTabuada = 7;

/* for (let contador = 1; contador <= 10; contador++) {
  console.log(`${numeroTabuada} x ${contador} =`, numeroTabuada * contador); // fiz sozinho a questao da tabuada completa o resultado foi com ajuda mas depois eles fizeram kkkkkk
  //console.log(`numeroTabuada x ${contador} = ${numeroTabuada * contador}`); esse é o modelo feito na aula
}*/

for (let numeroTabuada = 1; numeroTabuada <= 10; numeroTabuada++) {
  for (let contador = 1; contador <= 10; contador++) {
    console.log(`${numeroTabuada} x ${contador} = ${numeroTabuada * contador}`); //esse é o modelo feito na aula
  }
  console.log("============");
}
