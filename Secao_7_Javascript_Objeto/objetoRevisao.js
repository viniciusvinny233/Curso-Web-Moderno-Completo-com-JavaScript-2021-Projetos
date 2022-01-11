const Carro = {
  Nome: "Sivic",
  Marca: "Ronda",
  Ano: "2014",
  Proprietario: {
    Nome: "Gabriel Ferreira",
    Idade: "23 Anos",
    CPF: "123.456.789.12",
    Endereco: {
      Rua: "Av. Paulista",
      Numero: "289",
    },
  },
  Pilotos: [
    { Piloto1: "Fernanda" },
    { Piloto2: "Renan" },
    { Piloto3: "Felipe" },
  ],
  Preco: 69.999,
};

console.log(Carro.Pilotos);

for (i = 0; i < Carro.Pilotos.length; i++) {
  console.log("Opa");
}
