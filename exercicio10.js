/** 
 * 10 - Encontre o maior divisor comum (MDC) de dois números
 * 
 * Escreva um programa que use um loop do while para encontrar 
 * o maior divisor comum (MDC) de dois números fornecidos 
 * (por exemplo, 56 e 98).
 * 
 * Dica: Utilize o algoritmo de Euclides, onde você repete o processo 
 * de substituir o maior número pela diferença dos dois números 
 * até que ambos sejam iguais.
 */

let a = 56;
let b = 98;

do {
    if (a > b) {
        a = a - b;
    } else {
        b = b - a;
    }
} while (a !== b);

console.log(`O maior divisor comum é: ${a}`);
