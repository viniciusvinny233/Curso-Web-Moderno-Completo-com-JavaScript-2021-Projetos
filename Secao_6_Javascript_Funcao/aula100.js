const notas = [5, 8, 5, 1, 2, 7, 5, 8, 10];
const notasBaixas = [];
const notasAltas = [];

for (i in notas) {
  if (notas[i] > 6) {
    notasAltas.push(notas[i]);
  }
}

for (i in notas) {
  if (notas[i] < 6) {
    notasBaixas.push(notas[i]);
  }
}

console.log(notasBaixas);
console.log(notasAltas);

let notasBaixasFilter = notas.filter(function (i) {
  return i < 6;
});

let notasAltasFilter = notas.filter(function (i) {
  return i > 6;
});

console.log(notasBaixasFilter);
console.log(notasAltasFilter);

let notasAltasArrow = notas.filter(i => i > 6);
let notasBaixasArrow = notas.filter(i => i < 6);

console.log(notasBaixasArrow);
console.log(notasAltasArrow);
