//Escreva uma função que informa se um número é par ou ímpar//

/* function parOuImpar (numero) {
    if(numero % 2 == 0) {
        return 'par';
    } else {
        return 'impar';
    } 
  };
  
  var resposta = parOuImpar(21);
  console.log(`Esse número é ${resposta}`);
  /*



//Criação de uma function que recebe dois parâmetros e na hora da chamada da função
//manda somente um parâmetro

/* function parOuImpar (numero=2) {
    if(numero % 2 == 0) {
        return 'par';
    } else {
        return 'impar';
    } 
  };
  
  var resposta = parOuImpar();
  console.log(`Esse número é ${resposta}`);
  /*



//Criação de Função direto de uma declaração de variável//

var parOuImpar = function(numero) {
    if(numero % 2 ==0) {
        return 'par';
    } else {
        return 'impar';
            }
};

console.log(`Esse número é ${parOuImpar(13)}`);
 
*/



//Arrow Function//

var parOuImpar = (numero) => {
    if(numero % 2 == 0){
        return 'par';        
    } else {
        return 'impar';
    }
};

console.log(`Esse número é ${parOuImpar(10)}`);