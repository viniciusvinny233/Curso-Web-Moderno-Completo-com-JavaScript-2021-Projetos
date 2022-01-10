const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numbersPar = [];
let numbersImpar = [];

for (i in numbers) {
  resto = numbers[i] % 2;

  if (resto == 0) {
    numbersPar.push(numbers[i]);
  } else {
    numbersImpar.push(numbers[i]);
  }
}

console.log(`A quantidade de números pares é: ${numbersPar.length}`);
console.log(`A quantidade de números Ímpares é: ${numbersImpar.length}`);
