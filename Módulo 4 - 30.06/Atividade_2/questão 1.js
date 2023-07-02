// ATIVIDADE PRÁTICA 2: 30/06

// 1) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda possui, além de carros hatch, sedans, motocicletas e caminhonetes.
//  a)Caso o comprador queira o hatch, retorne: “Compra efetuada com sucesso”.
//  b)Nas outras opções, retorne: “Tem certeza que não prefere este modelo?”.
//  c)Caso seja especificado um modelo que não está disponível, retorne no console: “Não trabalhamos com este tipo de automóvel aqui”.

function buyCar() {
  let typeCar = prompt("Digite o tipo de carro: ");
  let message;

  if (typeCar === "hatch") {
    message = "Compra realizada com sucesso.";
  } else if (
    typeCar === "sedans" ||
    typeCar === "motocicletas" ||
    typeCar === "caminhonetes"
  ) {
    message = "Tem certeza que deseja esse modelo?";
  } else {
    message = "Não trabalhamos com este tipo de automóvel.";
  }

  console.log(message);
}
buyCar();
