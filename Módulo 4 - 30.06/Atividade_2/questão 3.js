// ATIVIDADE PRÁTICA 2: 30/06

// 3) Construa uma função que receba um número.
//  a) Se o número for  positivo, mostrar a informação de que ele é positivo.
//  b) Se o número for negativo, mostrar a informação de que ele é negativo.

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