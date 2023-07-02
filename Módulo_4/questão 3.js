//ATIVIDADE PRÁTICA 1: 30/06

// 3) Os alunos da turma de Front-end estão estudando em horários diferentes:
//  a)Se o horário for o matutino, mostrar a mensagem "Bom Dia!".
//  b)Se o horário for vespertino, mostrar "Boa Tarde!".
//  c)Se o horário for noturno, mostrar "Boa Noite!".
//  d)Se não houver informação, mostrar  "Valor Inválido!".

let classSchedule = parseInt(
  prompt(
    "Digite o horário de aula (1 - matutino, 2 - vespertino, 3 - noturno): "
  )
);

function CheckSchedule(classSchedule) {
  let message;

  switch (classSchedule) {
    case 1:
      message = "Bom dia!";
      break;

    case 2:
      message = "Boa tarde!";
      break;

    case 3:
      message = "Boa noite!";
      break;

    default:
      message = "Valor inválido, tente novamente!";
      break;
  }

  console.log(message);
}

CheckSchedule(classSchedule);
