/*
ATIVIDADE DE FIXAÇÃO 2: 03/07

3) Criar um array contendo 7 atividades que você faz durante o dia.
a) Exibir no console as atividades na ordem inversa.
b) Selecionar e exibir no console, os elementos nas posições 3 e 6.
c) Exibir no console seu array transformado em string. Substituir a vírgula pelo símbolo " - " (hífen).
d) Criar um array com 2 atividades que você mais gosta e juntar com o array das atividades que você faz durante o dia. E exibir no console o resultado.
*/

let activities = [
  "Acordar",
  "Tomar banho",
  "Tarefas domésticas",
  "Ir para universidade",
  "Almoçar",
  "Voltar pra casa",
  "Revisar conteúdo",
];

console.log(activities);
activities.reverse();
console.log(activities);

console.log(`Posição 3: ${activities[3]}`);
console.log(`Posição 6: ${activities[6]}`);

console.log(activities.join(", "));

let extraActivities = ["Ler", "Dormir"];
// console.log(extraActivities);

let concatActivities = activities.concat(extraActivities);
// console.log(concatActivities);
