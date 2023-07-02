/*
ATIVIDADE DE FIXAÇÃO 1: 29/06

1) Cria variável para armazenar a resposta da pergunta: você é maior de 18 anos?
a) Se for maior ou igual a 18 anos, escreva a mensagem no console: Que legal! Você já pode ter a carteira de habilitação.
b) Se for menor de 18 anos, escreva a mensagem no console: Poxa, que pena! Você ainda não pode ter a carteira de habilitação.

*/

let age = parseInt(prompt("Você é maior de 18 anos? Digite sua idade: "));

if (age >= 18) {
  console.log("Você já pode ter CNH.");
} else {
  console.log("Você ainda não pode ter CNH.");
}

