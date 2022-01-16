const produtos = [
  { nome: "Ipad", preco: 5000, quebra: true},
  { nome: "Iphone", preco: 9000, quebra: true },
  { nome: "Mac", preco: 19000, quebra: true },
  { nome: "Watch", preco: 1300, quebra: false },
  { nome: "Pods", preco: 400, quebra: false },
  { nome: "Charger", preco: 100, quebra: false },
];

let filterValor = produtos.filter((e) => {
  return e.preco > 1000 && e.quebra == false;
});

console.log(filterValor);

let valor = e => e.preco < 1000
let quebra = e => e.quebra == false

console.log(produtos.filter(valor).filter(quebra))