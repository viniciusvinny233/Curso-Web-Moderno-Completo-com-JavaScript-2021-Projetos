function Mercado(fruta) {
  switch (fruta) {
    case "maçã":
    case "Maçã":
      console.log("Não vendemos maçã aqui");
      break;

    case "kiwi":
    case "Kiwi":
      console.log("Estamos com escassez de kiwis");
      break;

    case "Melancia":
    case "melancia":
      console.log("Aqui está, são 3 reais o quilo");
      break;

    default:
    console.log("Não vendemos esta fruta aqui");
      break;
  }
}

Mercado("Maçã")
Mercado("Melancia")
Mercado("Kiwi")
Mercado("Uva")