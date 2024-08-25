/** 
 * 9 - Imprima um padrão de estrela decrescente
 * 
 * Escreva um programa que use um loop do while para 
 * imprimir um padrão de estrelas decrescente.
 * 
 * Dica: Utilize dois loops, um dentro do outro.
 */

let linhas = 5;

do {
    let estrelas = ' ';
    let count = linhas;

    do {
         estrelas += '*';
         count--;
    } while (count > 0);
    
    console.log(estrelas);
    linhas--;

} while (linhas > 0);