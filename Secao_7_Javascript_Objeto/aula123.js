const pai = {olhos: "Azuis", cabelo: "loiros", nome: "Felipe"}

const filha1 = Object.create(pai)

filha1.nome = "Juliana"

console.log(filha1)

const filha2 = Object.create(pai)
filha2.nome = "Fernanda"

console.log(`A ${filha2.nome} tem cabelos ${filha2.cabelo}`)

for (let key in filha2) {
    filha2.hasOwnProperty(key) 
    ? console.log(`${key} está listado no objeto`)
    : console.log(`${key} foi herdada ao objeto`)
}