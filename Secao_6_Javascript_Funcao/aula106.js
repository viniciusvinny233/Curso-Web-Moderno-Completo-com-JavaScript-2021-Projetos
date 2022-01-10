let produtos = [];

function criaProduto(nome, valor, vencimento) {
  if (vencimento < 2025) {
    console.log(`${nome} está vencido!!!`);
  }

  return {
    nomeProd: nome,
    valorProd: valor,
    vencimentoProd: vencimento,
  };
}

produtos.push(criaProduto("Panetone", 299.99, 2024));
produtos.push(criaProduto("Azeitona", 19.99, 2029));
produtos.push(criaProduto("Maionese", 9.99, 2021));
produtos.push(criaProduto("Shampoo", 39.99, 2037));

console.log(produtos);
