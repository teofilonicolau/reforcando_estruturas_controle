/**2 - Verifique se um número é primo
Escreva um programa que use um loop for para verificar se
 um número fornecido (por exemplo, 29) 
 é primo. Imprima "É primo" ou "Não é primo". 
 
Dica: Um número primo só é divisível por 1 e por ele mesmo.*/

const prompt = require('prompt-sync')();

let numero = parseInt(prompt('digite um  numero pra verificarmos se é primo  : '));

function verificarPrimo(num) {
    if(num <= 1) return false;
    if (num === 2) return true;

    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return true;
}

if(verificarPrimo(numero)) {
    console.log('É primo');    
} else {
    console.log('Não é primo');
}