/** 7 - Conte o número de dígitos de um número
 * 
 * Escreva um programa que use um loop do while para contar
 * o número de dígitos de um número fornecido (por exemplo, 12345 tem 5 dígitos).
 * 
 * Dica: Use operações de divisão para reduzir o número até que ele seja zero.
 */
let num = 12345;
let count = 0;

do {
    count++;
    num = Math.floor(num / 10);
} while (num > 0);

console.log(`O numero tem ${count} ,digitos`)