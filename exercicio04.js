/**4 - Calcule o fatorial de um número

Escreva um programa que use um loop while 
para calcular o fatorial de um número fornecido 
(por exemplo, 5). O fatorial de 5 (5!) é 120.
Dica: O fatorial de n (n!) é o produto de todos os números de 1 a n. */

let num = 5;
let i = num;
let fatorial = 1;


while (i > 1) {
    fatorial *= i;
    i--;
}

console.log(`O Fatorial de ${num} é  : ${fatorial}`)