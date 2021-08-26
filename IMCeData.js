//Criar dois objetos pessoaA e pessoaB, essas pessoas vao receber valores (nome peso altura idade). Criar uma funcao que vai retornar o imc e o ano de nascimento//

let personA = {
    name: 'pessoaA',
    peso: 60,
    altura: 1.60,
    idade: 30
}

// nomeDoObjeto.nomeDaPropriedade //
console.log('Seu nome é: ', personA.name);
console.log('Seu peso é: ', personA.peso);
console.log('Sua altura é: ', personA.altura);
console.log('Sua idade é: ', personA.idade);

//Declarando a função (pode ter ou não parâmetros, se tiver, declara os parâmetros) e guardando na variável//
let calculoIMC = function(peso, altura) {
    console.log('Seu cálculo de IMC é: ', (peso / (altura * altura)).toFixed(2));
} 
//Chamando/Executando a função passando valores concretos para ela//
calculoIMC(personA.peso, personA.altura)

let anoNascimento = function(anoAtual, idade) {
console.log('O ano de nascimento é ', (anoAtual - idade))  
}
// Declarando a variável anoAgora e armazenando nela o ano corrente obtido através do método getFullYear() do Date() //
let anoAgora = new Date().getFullYear()

anoNascimento(anoAgora, personA.idade)

