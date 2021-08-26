//Crie uma classe para pessoa com as seguintes características: 
//Atributos (nome, idade, CNH) e Metodos (Dirigir, dormir, comer)

class Pessoa {
    constructor (nome, idade, cnh){
    this.nome = nome,
    this.idade = idade,
    this.cnh = cnh
    }
    dirigir(){
        console.log('Pessoa dirigindo')
    }
    comer(){
        console.log('Pessoa comendo')
    }
    dormir(){
        console.log('Pessoa dormindo')
    }
}


//Crie um array e informe seu tamanho de forma que se houver alteração no array o programa ainda funciona

var numbers = [23, 56, 34, 12, 78];

console.log(`O tamanho do array é: ${numbers.length}`);



//Crie um algoritmo que percorra um array e imprima seus valores (No índice 2 o valor é 45)

var numbers = [1, 15, 45, 65, 85];

for(var count = 0; count < numbers.length; count++) {
    console.log(`No índice ${count} o valor é: ${numbers[count]}`);
}


//declare os seguintes vetores e faça um programa para que seja informado quantos dias tem cada mês. 
//Ex.: "O mês de Janeiro tem 31 dias"

var mes = [
    'janeiro', 'fevereiro', 'março', 'abril', 'junho', 'julho', 'agosto', 
    'setembro', 'outubro', 'novembro', 'dezembro'
];
var dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var count = 0;
var tamanhoMes = mes.length;

for (count; count < tamanhoMes; count++) {
    console.log(`O mês de ${mes[count]} tem ${dias[count]} dias`);
}



// Escreva um programa que contenha uma lista com 5 nomes pré cadastrados. 
//O programa deverá dar ao usuário a opção de excluir um único nome da lista, com valores entre 1 e 5.
//Feita a escolha do usuário pelo número correspondente ao nome, o programa deverá mostrar na tela
//os quatro nomes que estaram cadastrados na lista.


var nomes = [1, 2, 3, 4, 5]

