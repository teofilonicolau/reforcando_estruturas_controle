/**3 - Imprima um triângulo de números

Escreva um programa que use um loop for para imprimir um triângulo de números.

Dica: Utilize dois loops for, um dentro do outro.
 */
const linhas = 5;

for (let i = 1; i <= linhas; i++) {
    // Loop interno para imprimir os números em cada linha
    for (let j = 1; j <= i; j++) {
       process.stdout.write(j + ' '); // Imprime o número seguido por um espaço
    }
    console.log(); // Move para a próxima linha
}
