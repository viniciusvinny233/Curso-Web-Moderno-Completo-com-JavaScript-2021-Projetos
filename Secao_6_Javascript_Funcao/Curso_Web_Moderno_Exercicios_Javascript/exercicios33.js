let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

function GetConcat (...args) {
    resultado = []

    for(let i = 0; i<arguments.length; i++){

        resultado = resultado.concat(arguments[i])

    }
    return resultado;
}

console.log(GetConcat(vetorInteiro, vetorDouble))
console.log(GetConcat(vetorDouble, vetorString))