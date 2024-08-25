/**5 - Inverta os dígitos de um número


Escreva um programa que use um loop while para inverter 
os dígitos de um número fornecido (por exemplo, 1234 deve ser impresso como 4321).
Dica: Use operações de módulo e divisão para extrair os dígitos.
 */

let num  = 1234;
let invertido = 0;

while (num > 0) {
    let digito = num % 10 ;
    invertido = (invertido * 10) + digito;
    num = Math.floor(num / 10);
}

console.log(`Número invertido : ${invertido}`)
