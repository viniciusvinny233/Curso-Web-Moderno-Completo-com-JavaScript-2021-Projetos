function CalcuraAltura(kid1, crescimentoAnual1, kid2, crescimentoAnual2) {
  let kidMenor;
  let kidMaior;
  let anosAtuais = 2020;
  let anos = 0;
  let crescimentoAnualMaior;
  let crescimentoAnualMenor;

  if (kid1 > kid2) {
    kidMaior = kid1;
    kidMenor = kid2;

    crescimentoAnualMaior = crescimentoAnual1;
    crescimentoAnualMenor = crescimentoAnual2;
  } else {
    kidMenor = kid1;
    kidMaior = kid2;
    crescimentoAnualMaior = crescimentoAnual2;
    crescimentoAnualMenor = crescimentoAnual1;
  }

  if (crescimentoAnualMenor > crescimentoAnualMaior) {
    while (kidMenor <= kidMaior) {
      calculoCrescimentoMenor =
        kidMenor + kidMenor * (crescimentoAnualMenor / 100);
      kidMenor = calculoCrescimentoMenor;

      calculoCrescimentoMaior =
        kidMaior + kidMaior * (crescimentoAnualMaior / 100);
      kidMaior = calculoCrescimentoMaior;

      console.log(
        `Em ${anosAtuais} a criança menor terá ${kidMenor
          .toFixed(2)
          .replace(".", ",")}m e a maior ${kidMaior
          .toFixed(2)
          .replace(".", ",")}m`
      );

      anosAtuais++;
      anos++;
    }
  } else {
    console.log(`A criança menor nunca ultrapassará a maior`);
  }

  if (crescimentoAnualMenor > crescimentoAnualMaior) {
    console.log(`A criança menor ultrapassará a menor em ${anos} anos`);
  }
}

CalcuraAltura(1.4, 1, 1.6, 0.5);
