let numbersPar = [];

function GetParNumber(min = 1, max = 100) {
  for (let index = 0; index <= max; index++) {
    calculaResto = min % 2;
    if (calculaResto == 0) {
      numbersPar.push(min);
    }
    min++;
  }
}
GetParNumber();

console.log(`Os números pares são: ${numbersPar}`);
