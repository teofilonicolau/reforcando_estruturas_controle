/**1 - Imprima a sequência de Fibonacci até o 10º termo
Escreva um programa que use um loop for para imprimir os 
primeiros 10 termos da sequência de Fibonacci. 
(0, 1, 1, 2, 3, 5, 8, 13, 21, 34)

Dica: A sequência de Fibonacci 
é calculada somando os dois termos anteriores para obter o próximo termo.
 */

const prompt = require('prompt-sync')();

let termo1 = 0;
let termo2 = 1;

console.log(termo1);
console.log(termo2);


for (let i = 3; i <= 10; i++) {
    let proximoTermo = termo1 + termo2;
    console.log(proximoTermo);

    termo1 = termo2;
    termo2 = proximoTermo
}