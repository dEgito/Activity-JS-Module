/*
ATIVIDADE DE FIXAÇÃO 1: 03/07

3)Criar Array com 6 itens (nome de músicas).
a)Exibir no console o total de itens.
b)Exibir no console os itens nas posições : 1, 2, 6, 8.
c)Exibir no console o item na última posição.
*/

const songs = [
  "Never let me down again",
  "Diga, parte 2",
  "When it breaks",
  "The River",
  "Hopelessly Hopeful",
  "A Estação",
];

let last = songs.length - 1; //ANOTAÇÃO: pega a quantidade de itens e retira 1, já que o array começa a contar do 0

console.log(last);
console.log(`Tamanho do array: ${songs.length}`);

console.log(`Posição 1: ${songs[1]}`);
console.log(`Posição 2: ${songs[2]}`);
console.log(`Posição 6: ${songs[6]}`); // Essa posição não existe (o limite é 5), logo será retornado 'undefined'
console.log(`Posição 8: ${songs[8]}`); // Essa posição não existe (o limite é 5), logo será retornado 'undefined'

console.log(`Posição ${last}: ${songs[last]}`);
