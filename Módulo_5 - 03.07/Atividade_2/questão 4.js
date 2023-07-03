/*
ATIVIDADE DE FIXAÇÃO 2: 03/07

4) Criar um array com o nome de 5 cidades.
a) Exibir, no console, em ordem crescente os times que estão no array.
b) Remover a cidade que está no início do array.
c) Remover a cidade que está no final do array.
d) Exibir, no console, em ordem crescente os times que estão no array.
*/

let cities = [
  "Recife",
  "Jaboatão dos Gurarapes",
  "Camaragibe",
  "Olinda",
  "São Lourenço",
];

console.log(cities.sort())
cities.shift()
cities.pop()
console.log(cities.sort())