//Condição com Switch-Case//

// Implemente um, algoritmo que leia o código do item pedido, a quantidade e calcule
//o valor a ser pago por aquele lanche imprimindo ao usuário uma msg específica para 
//cada item. Considere que a cada execução somente será calculado um item.

var codigoPedido = 101;
var quantidade = 2;
var valorTotal;

switch (codigoPedido) {
    case 100 :
        valorTotal = quantidade * 1.20;
        console.log(`Você pediu Cachorro quente e o total é ${valorTotal}`);
        break;
    case 101 :
        valorTotal = quantidade * 1.30;
        console.log(`Você pediu Bauru simples e o total é ${valorTotal}`);
        break;
    case 102 :
        valorTotal = quantidade * 1.50;
        console.log(`Você pediu Bauru com ovo e o total é ${valorTotal}`);
        break;
    case 103 :
        valorTotal = quantidade * 1.20;
        console.log(`Você pediu Hamburguer e o total é ${valorTotal}`); 
    case 104 :
        valorTotal = quantidade * 1.30;
        console.log(`Você pediu Cheeseburguer e o total é ${valorTotal}`);
    case 105 :
         valorTotal = quantidade * 1.00;
        console.log(`Você pediu Refrigerante e o total é ${valorTotal}`);
    default:
        console.log(`Você errou o pedido!`);

}

