//Repetição com for//

//Faça um algoritmo que mostre os números que são divisíveis de 18 e 
//que estejam entre 10 e 500

/*var numero;

for (numero = 10; numero <= 500; numero++){
    if(numero % 18 == 0){
        console.log(`Achei um número divisível por 18 e é: ${numero}`);
    }
};

*/

//E se eu quiser que seja impresso apenas o primeiro número achado?//

var numero;

for (numero = 10; numero <= 500; numero++){
    if(numero % 18 == 0){
        console.log(`Achei um número divisível por 18 e é: ${numero}`);
        break;
    }
};
