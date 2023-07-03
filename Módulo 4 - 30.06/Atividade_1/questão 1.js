// ATIVIDADE PRÁTICA 1: 30/06

// 1) Exibir no console o resultado das seguintes validações, dado o valor da variável _numero:
// a) Se o valor for menor que zero, mostrar: O valor número é um Número negativo.
// b) Se o valor for maior ou igual a zero, mostrar: O valor número é um Número positivo.

// Teste para usar o prompt via terminal
//const prompt = require('prompt-sync')({sigint: true})

let number = parseFloat(prompt("Digite um número: "));

function CheckNumber(number) {
  let message;

  if (number < 0) {
    message = `${number} é um número negativo.`;
  } else {
    message = `${number} é um número positivo.`;
  }

  return (console.log(message));
}

CheckNumber(number);
