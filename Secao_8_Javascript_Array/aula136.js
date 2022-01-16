var Numbers = [1, 2, 3, 4, 5];


let ResultadoDouble = Numbers.map(e => e * 2)

console.log(ResultadoDouble)

let ResultadoMais10 = e => e + 10
let ResultadoTriple = e => e * 3
let ResultadoPotencia = e => e * e

console.log(ResultadoDouble.map(ResultadoMais10).map(ResultadoTriple).map(ResultadoPotencia))