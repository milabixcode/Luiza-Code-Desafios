//Prompt
let nome = promptgit("Informe seu nome: ");
console.log(nome);

let sobrenome = prompt("Informe seu sobrenome");
console.log(sobrenome);

//Alert
alert("Essa é uma mensagem de alerta!!!!");

//Math
//Maior numero
let maior = Math.max(10, 57, 38, 23)
console.log(maior)
//Menor numero
let menor = Math.min(10, 57, 38, 23)
console.log(menor)
//Arredondar numero
let arredondar = Math.round(7.1231241)
console.log(arredondar)
//Arredondar sempre para cima
let arredondarCima = Math.ceil(7.1231241)
console.log(arredondarCima)

//Readline
const rLine = require("readline");

const rl = rLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Qual é o seu nome `, (nome) => {
  console.log(`Olá ${nome}`);
  rl.close();
});

rl.on("close", () => {
  console.log("volte sempre!!!");
});

//ReadlineSync
const rLine = require('readline-sync')

rLine.question(`Qual é seu nome \n`, (nome) => {
    console.log(`Olá ${nome}`)
})



