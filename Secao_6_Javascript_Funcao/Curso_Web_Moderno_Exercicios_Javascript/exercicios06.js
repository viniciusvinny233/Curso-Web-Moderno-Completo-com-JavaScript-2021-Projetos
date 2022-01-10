function JurosSimples(capInicial, juros) {
  let CalculoJuros = juros / 100;

  let FinalJurosSimples = capInicial + capInicial * CalculoJuros;

  return console.log(FinalJurosSimples);
}

JurosSimples(652, 29);

function JurosComposto(capInicial, juros, anos) {
  let CalculoJuros = juros / 100;

  for (let index = 0; index < anos; index++) {
    this.FinalJurosComposto = capInicial + capInicial * CalculoJuros;

    capInicial = this.FinalJurosComposto;
  }
  console.log(this.FinalJurosComposto);
}

JurosComposto(100, 25, 2);
