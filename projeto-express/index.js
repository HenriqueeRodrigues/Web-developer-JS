const express = require("express");

const servidor = express();

servidor.listen(4000, () => {
  console.log("O servidor já está rodando");
});
