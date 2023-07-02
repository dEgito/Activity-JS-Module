// ATIVIDADE PRÁTICA 1: 30/06

//2)  Criar uma função em javascript que receba três parâmetros numéricos valor A, valor B e valor C, validar se:
//  a) O (valor A  + valor C)  é maior que valorB
//    i) Se for, exibir no console os valores de valor A + Valor C e a soma deles.
//    ii) Se não for, exibir no console que os valores de valor A + Valor C é igual ao valor B.

let valueA = parseFloat(prompt("Digite o 1º valor: "));
let valueB = parseFloat(prompt("Digite o 2º valor: "));
let valueC = parseFloat(prompt("Digite o 3º valor: "));

function CheckNumber(valueA, valueB, valueC) {
  let message;
  let sum = valueA + valueC;

  if (sum > valueB) {
    message = `${valueA} + ${valueC} é igual a ${sum}, logo é maior que ${valueB}`;
  } else if (sum == valueB) {
    message = `${valueA} + ${valueC} é igual a ${sum}, logo é igual a ${valueB}`;
  } else {
    message = `${valueA} + ${valueC} é igual a ${sum}, logo é menor que ${valueB}`;
  }

  console.log(message);
}

CheckNumber(valueA, valueB, valueC);
