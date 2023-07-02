/*
ATIVIDADE DE FIXAÇÃO 3: 29/06

1) Exibir no console o resultado das seguintes validações, dado os valores x = 5 e y = 7:
  a)Se x for menor que y, mostrar a mensagem: Olá mundo!
  b)Se x for maior que y, mostrar: Mundo, olá!
  c)Se x for igual a y, mostrar: Adeus!
*/

let x = 5;
let y = 7;
let message;

if (x < y) {
  message = "Olá, mundo!";
} else if (x == y) {
  message = "Adeus!";
} else {
  message = "Mundo, olá!";
}

console.log(message);
