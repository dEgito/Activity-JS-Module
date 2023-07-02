/*
ATIVIDADE DE FIXAÇÃO 3: 29/06

2) Exibir no console o resultado das seguintes validações,vamos dizer o filme que está passando no cinema de acordo com a fruta, dado o valor de fruta = laranja:
  a)Se fruta for igual a banana, mostrar: O filme é Os minions.
  b)Se fruta for igual a laranja, mostrar: O filme é Laranja Mecânica.
  c)Se fruta for igual a maçã, mostrar: O filme é Branca de neve.
  d)Se não for nenhum dos valores acima, mostrar: O cinema tá fechado.
*/

let fruit = prompt("Qual a fruta?").toLowerCase();
let message;

switch (fruit) {
  case "banana":
    message = "O filme é 'Os Minions'.";
    break;

  case "laranja":
    message = "O filme é 'Laranja Mecânica'.";
    break;

  case "maçã":
    message = "O filme é 'Branca de Neve'.";
    break;

  default:
    message = "O cimena está fechado!";
    break;
}

console.log(message);
