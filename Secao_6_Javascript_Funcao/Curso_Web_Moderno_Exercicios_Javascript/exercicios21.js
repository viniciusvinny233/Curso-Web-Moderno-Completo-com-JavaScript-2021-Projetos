function GetValor(idade) {
  let valorFinal;

  if (idade > 0 && idade <= 10) {
    valorFinal = 100 + 80;
    console.log(
      `O valor final do seu convênio é de : R$${valorFinal
        .toFixed(2)
        .replace(".", ",")}`
    );
  } else if (idade > 10 && idade <= 30) {
    valorFinal = 100 + 50;
    console.log(
      `O valor final do seu convênio é de : R$${valorFinal
        .toFixed(2)
        .replace(".", ",")}`
    );
  } else if (idade > 30 && idade <= 60) {
    valorFinal = 100 + 95;
    console.log(
      `O valor final do seu convênio é de : R$${valorFinal
        .toFixed(2)
        .replace(".", ",")}`
    );
  } else if (idade > 60 && idade <= 120) {
    valorFinal = 100 + 130;
    console.log(
      `O valor final do seu convênio é de : R$${valorFinal
        .toFixed(2)
        .replace(".", ",")}`
    );
  } else {
    console.log(`Idade inválida!`);
  }
}

GetValor(-10);
GetValor(20);
GetValor(30);
GetValor(40);
GetValor(50);
GetValor(60);
GetValor(70);
GetValor(80);
GetValor(90);
GetValor(110);
GetValor(120);
GetValor(130);
