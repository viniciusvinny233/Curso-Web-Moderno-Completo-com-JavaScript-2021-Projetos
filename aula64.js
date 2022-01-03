var pessoa = {

    Nome: "Ana",
    Idade: 17,
    Altura: 1.64

}

const { Nome, Idade } = pessoa

console.log(Nome, Idade)

const { Nome: n, Idade: i } = pessoa

console.log(n, i)

const { Sobrenome = "Souza" } = pessoa

console.log(n, Sobrenome)

const { Endereço: { Rua: rua, Numero = 124}} = pessoa



