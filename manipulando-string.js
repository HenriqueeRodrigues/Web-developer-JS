const site = "www.HcodeLab.com.br/cursos";

console.log(site.length);
console.log(site.substr(4, site.length - 4));
console.log(site.charAt(4));
console.log(site[0]);
console.log(site.substr(-6, 3).toUpperCase());
console.log(site);
console.log(site.toLowerCase());
console.log(site.replace());
console.log(site.toLocaleUpperCase());
console.log(site.replace(".com", ".org"));
console.log(site.includes("br"));
console.log(site.substr(site.indexOf(".br"), site.length));

const mensagemBoasVindas = "Seja bem-vindo ao HcodeLab!";

console.log(mensagemBoasVindas.split(" "));

const email = "rafa@hcode.com.br";

const emailSplit = email.split("@");

const nomeDeUsuario = emailSplit[0];
const dominio = emailSplit[1];

console.log(nomeDeUsuario, dominio);

/*let dominioo = email.substr(email.indexOf("@"), site.length);
let emaill = email.substr(email.indexOf("@"), site.length("-"));

console.log(dominioo, emaill);*/
//tentei fazer o exercicio de separar o usuario e o dominio de outra maneira mas nao consegui apenas consegui separar  o dominio
