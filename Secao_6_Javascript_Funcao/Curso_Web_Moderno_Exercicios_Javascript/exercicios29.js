const vetor = [1, 5, 6, 8, 12, 14, 15, 16, 17, 19, 20, 21, 23, 24, 26, 27, 29];

function GetNumber(vetorArray) {
  let numbersInterval = 0;
  let numbersIntervalOut = 0;

  for (i in vetorArray) {
    if (vetorArray[i] >= 10 && 20 >= vetorArray[i]) {
      numbersInterval++;
    } else {
      numbersIntervalOut++;
    }
  }

  console.log(
    `A quantidade de números que estão nesse intervalo é: ${numbersInterval}`
  );
  console.log(
    `A quantidade de números que não estão nesse intervalo é: ${numbersIntervalOut}`
  );
}

GetNumber(vetor);
