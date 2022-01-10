const number = [516, 816, 9612, 651, -28, -9212, -429, 5216, -81658];

let numberNegativos = [];

for (i in number) {
  if (number[i] < 0) {
    numberNegativos.push(number[i]);
  }
}

console.log(numberNegativos);
