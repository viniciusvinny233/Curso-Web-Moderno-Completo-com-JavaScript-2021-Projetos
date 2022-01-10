function Carros(carro) {
  switch (carro) {
    case "hatch":
    case "Hatch":
      console.log("Compra efetuada com sucesso!");
      break;
    case "sedans":
    case "Sedans":
    case "motocicletas":
    case "Motocicletas":
    case "caminhonetes":
    case "Caminhonetes":
      console.log("Tem certeza que não prefere este modelo ?");
      break;

    default:
      console.log("Não trabalhamos com este tipo de automóvel aqui");
      break;
  }
}

Carros("hatch")
Carros("sedans")
Carros("motocicletas")
Carros("Caminhonetes")
Carros("Ferrari")