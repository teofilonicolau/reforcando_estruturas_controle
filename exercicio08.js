/** 8 - Calcule a soma dos dígitos de um número
 *
 * Escreva um programa que use um loop do while para calcular
 * a soma dos dígitos de um número fornecido (por exemplo, a soma dos dígitos de 1234 é 10).
 *
 * Dica: Use operações de módulo para extrair os dígitos e depois some-os.
 */
let num = 1234;
let soma = 0;

do {
    let digito = num % 10;
    soma += digito;
    num = Math.floor(num / 10);
} while (num > 0);

console.log(`A soma dos dígitos é : ${soma}`);