// ATIVIDADE PRÁTICA 2: 30/06

// 2) Criar um bloco de código, onde deverá ter três variáveis do tipo inteiro: a, b, c. Verifique se:
//    a) Se todos os lados são iguais, o triângulo será equilátero;
//    b) Se todos os lados forem diferentes, será escaleno;
//    c) Se nenhuma das duas condições anteriores for atendida, será isósceles.

let edgesA = parseInt(prompt("Digite o tamanho de 1ª aresta: "));
let edgesB = parseInt(prompt("Digite o tamanho de 2ª aresta: "));
let edgesC = parseInt(prompt("Digite o tamanho de 3ª aresta: "));

function TypeTriangle(edgesA, edgesB, edgesC) {
  let message;

  if (edgesA === edgesB && edgesB === edgesC && edgesA === edgesC) {
    message = "Todos os lados são iguais, logo é um triângulo equilátero.";
  } else if (edgesA !== edgesB && edgesB !== edgesC && edgesA !== edgesC) {
    message = "Todos os lados são diferentes, logo é um triângulo escaleno.";
  } else {
    message = "É um triângulo isóceles.";
  }

  console.log(message);
}

TypeTriangle(edgesA, edgesB, edgesC);
