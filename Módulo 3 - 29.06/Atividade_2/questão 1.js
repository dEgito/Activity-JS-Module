/*
ATIVIDADE DE FIXAÇÃO 2: 29/06

1) Exibir no console o resultado das seguintes validações, dado o valor da variável sistema_operacional é linux:
  a)Se o valor for linux, mostrar: O Linux é um sistema operacional de código aberto.
  b)Se o valor for windows, mostrar: O Windows é um sistema operacional da empresa Microsoft
  c)Se o valor for macOS, mostrar: O macOS é um sistema operacional da empresa Apple.
  d)Se o valor for Chrome OS, mostrar: O Chrome OS é um sistema operacional da empresa Google.
  e)Se não for nenhuma das opções acima, mostrar: Há a possibilidade de você estar utilizando um sistema mobile.
*/

let os = prompt(
  "Qual o sistema operacional? (Linux, Windows, MacOS, Chrome OS)"
).toLowerCase();
let message;

switch (os) {
  case "linux":
    message = "O Linux é um sistema operacional de código aberto.";
    break;

  case "windows":
    message = "O Windows é um sistema operacional da empresa Microsoft.";
    break;

  case "macos":
    message = "O macOS é um sistema operacional da empresa Apple.";
    break;

  case "chrome os":
    message = "O Chrome OS é um sistema operacional da empresa Google.";
    break;

  default:
    message = "Há a possibilidade de você estar utilizando um sistema mobile.";
    break;
}

console.log(message);
