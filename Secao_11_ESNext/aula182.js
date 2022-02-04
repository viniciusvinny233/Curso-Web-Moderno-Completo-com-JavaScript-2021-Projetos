for (let i of "object") {
  console.log(i);
}

const assuntosEcma = ["Map", "Set", "Promise"];

for (let i of assuntosEcma) {
  console.log(i);
}

const assuntosMap = new Map([
  ["Map", { abordado: true }],
  ["Set", { abordado: true }],
  ["Promise", { abordado: false }],
]);

for (let i of assuntosMap) {
    console.log(i)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

for (let [chave, valor] of assuntosMap.entries()) {
    console.log(valor, chave)
}