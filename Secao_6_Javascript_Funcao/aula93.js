const pessoa = {

    nome: "Pedro",
    idade() {return console.log(this.nome)},

}

pessoa.idade()

const idadeSemBind = pessoa.idade

console.log(idadeSemBind)

const idadeComBind = pessoa.idade.bind(pessoa)

idadeComBind()

console.log(typeof pessoa)