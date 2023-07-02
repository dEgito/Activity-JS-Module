/* 
ATIVIDADE DE FIXAÇÃO 2: 29/06

2) Cria variável para armazenar a resposta da pergunta: você já terminou o ensino médio?
a) Se for verdade, escreva a mensagem no console: Poxa, que legal!.
b) Se for mentira, escreva a mensagem no console: Falta pouco! Logo você termina.
*/

let answer = prompt("Você já terminou o ensino médio? S/N").toLowerCase();

if (answer === "s") {
  console.log("Poxa, que legal!");
} else if (answer === "n") {
  console.log("Falta pouco! Logo você termina.");
} else {
  console.log("Resposta inválida!");
}
