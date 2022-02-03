const porta = 3003;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bancoDeDados = require("./bancoDeDados");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/produtos", (req, res, next) => {
  res.send(bancoDeDados.GetCatalogo());
});

app.get("/produto/:id", (req, res, next) => {
  res.send(bancoDeDados.GetProduto(req.params.id));
});

app.post("/produtos", (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco,
  });

  res.send(produto);
});

app.listen(porta, () => {
  console.log(`O servidor está no ar na porta: ${porta}`);
});
