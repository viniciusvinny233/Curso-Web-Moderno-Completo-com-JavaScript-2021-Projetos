function GetFood(cod, quant) {
  switch (cod) {
    case 100:
      console.log(
        `Aqui está seu cachorro quente, o valor do seu pedido é: R$${(3 * quant)
          .toFixed(2)
          .replace(".", ",")}`
      );
      break;
    case 200:
      console.log(
        `Aqui está seu hambúrguer simples, o valor do seu pedido é: R$${(4 * quant)
          .toFixed(2)
          .replace(".", ",")}`
      );
      break;
    case 300:
      console.log(
        `Aqui está seu cheeseburguer, o valor do seu pedido é: R$${(5.5 * quant)
          .toFixed(2)
          .replace(".", ",")}`
      );
      break;
    case 400:
      console.log(
        `Aqui está seu bauru, o valor do seu pedido é: R$${(7.5 * quant)
          .toFixed(2)
          .replace(".", ",")}`
      );
      break;
    case 500:
      console.log(
        `Aqui está seu refrigerante, o valor do seu pedido é: R$${(3.5 * quant)
          .toFixed(2)
          .replace(".", ",")}`
      );
      break;
    case 600:
      console.log(
        `Aqui está seu suco, o valor do seu pedido é: R$${(2.8 * quant)
          .toFixed(2)
          .replace(".", ",")}`
      );
      break;

    default:
        console.log("Produto não reconhecido!");
      break;
  }
}

GetFood(100, 2);
GetFood(200, 4);
GetFood(300, 3);
GetFood(400, 5);
GetFood(500, 8);
GetFood(600, 7);
GetFood(700, 2);