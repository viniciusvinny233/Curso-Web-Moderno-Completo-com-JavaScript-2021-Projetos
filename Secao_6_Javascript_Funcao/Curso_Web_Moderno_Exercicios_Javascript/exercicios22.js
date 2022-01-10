const jurosMensal = 5 / 100;
let fatura = 1000;

function GetJuros(mes) {
  for (index = 0; index < mes; index++) {
    faturaJuros = fatura + fatura * jurosMensal;
    fatura = faturaJuros;
  }
  if (mes > 1) {
      nomeMes = "meses"
  } else {
      nomeMes = "mês"
  }
  console.log(
    `A fatura sob juros compostos em ${mes} ${nomeMes} será: R$${fatura
      .toFixed(2)
      .replace(".", ",")}`
  );
}

GetJuros(7);
