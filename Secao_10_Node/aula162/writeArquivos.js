const fs = require("fs");

const produto = {
  Nome: "Galaxy S21",
  Preco: "4999",
  Desconto: 0.15,
};

fs.writeFile(__dirname + "/arquivo.json", JSON.stringify(produto), (err) => {
  console.log(err || "Arquivo Gerado!");
});
