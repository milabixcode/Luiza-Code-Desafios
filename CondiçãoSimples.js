//Condição Simples (if-else)//

/*
var nota1, nota2, media, status;

nota1 = 10;
nota 2 = 7
media = (nota1 + nota2) / 2;

status = media >= 7 ? 'Aprovada' : 'Reprovada';

console.log(`A situação final da aluna é ${status}`);

*/

//Escreva um algoritmo que informe a média de duas notas e situação da aluna
//Se a média for superior a 7 a aluna está aprovada
//Se a média for inferior a 5 a aluna está reprovada
//Se a média ficar entre 5 e 6.9 a aluna irá para a prova final//

var nota1, nota2, media;

nota1 = 10;
nota2 = 7
media = (nota1 + nota2) / 2;

if(media >= 7) {
   console.log(`A situação final da aluna é APROVADA`);
} else if (media < 5) {
    console.log(`A situação final da aluna é REPROVADA`);
} else {
    console.log(`A aluna irá fazer prova final`);
}