/**6 - Verifique se um número é palíndromo

Escreva um programa que use um loop while 
para verificar se um número fornecido 
(por exemplo, 121) é um palíndromo. 
Um número é palíndromo se ele é igual ao seu reverso. */

let num = 121;
let originalNum = num;
let invertido = 0;

while(num > 0) {
    let digito = num % 10;
    invertido = (invertido * 10) + digito;
    num = Math.floor(num / 10);
}

if(originalNum === invertido) {
    console.log(`${originalNum} é um palindromo`);
} else {
    console.log(`${originalNum} mão é um palindromo`);
}