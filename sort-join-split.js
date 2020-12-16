const nomes = ["Felipe", "Bianca", "Julia", "Fernando", "Zerivaldo"];

nomes.sort();
nomes.reverse();

//console.log(nomes);

//let msg = "Socorram-me, subi no ônibus em marrocos";
let msg = "radar"; //palindromo palavras que são iguais de tras para frente

msg = msg.split("").reverse();

console.log(msg.join(""));
