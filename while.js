let vezes = 0;

while (new Date().getSeconds() < 30) {
  console.log(new Date().getSeconds());
  vezes++;
}

console.log("TERMINOU", new Date().getSeconds(), `segundos  /  Vezes ${vezes}`);
