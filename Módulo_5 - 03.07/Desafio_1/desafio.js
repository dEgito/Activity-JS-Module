/*
DESAFIO: CRIPTOGRAFIA DE ARRAY
*/

const secretMessage = [
  "Aprender",
  "não",
  "é",
  "o",
  "sobre",
  "que",
  "você",
  "consegue",
  "facilmente",
  "na",
  "primeira",
  "vez",
  "sobre",
  "o",
  "que",
  "você",
  "pode",
  "descobrir.",
  "-2015",
  "Chris",
  "Pine",
  "Aprenda",
  "JavaScript",
];

secretMessage.pop();
// console.log(secretMessage);
secretMessage.push("a", "programar");
// console.log(secretMessage);
secretMessage[secretMessage.indexOf("facilmente")] = "certo";
// console.log(secretMessage);
secretMessage.shift();
// console.log(secretMessage);
secretMessage.unshift("Programação");
// console.log(secretMessage);
secretMessage.splice(secretMessage.indexOf("consegue"), 5, "sabe");

// console.log(secretMessage);
const finalMessage = secretMessage.join(" ");
console.log(finalMessage);
