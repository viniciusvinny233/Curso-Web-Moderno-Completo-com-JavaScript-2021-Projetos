const carrinho = [
  '{"nome": "Borracha", "preco": 12.99}',
  '{"nome": "Caderno", "preco": 25.99}',
  '{"nome": "Bolsa", "preco": 120.99}',
  '{"nome": "Estojo", "preco": 19.99}',
  '{"nome": "Lápis", "preco": 2.99}',
  '{"nome": "Régua", "preco": 127.99}',
];

let ChangeObj = json => JSON.parse(json)

let GetPrice = produto => produto.preco

console.log(carrinho.map(ChangeObj).map(GetPrice))