let numbersImpar = [];

function ContadorImpar(min = 0, max = 100) {
  for (index = min; index < max; index++) {
    calculaResto = index % 2;

    if (calculaResto != 0) {
      numbersImpar.push(index);
    }
  }
}

ContadorImpar();

console.log(numbersImpar);
