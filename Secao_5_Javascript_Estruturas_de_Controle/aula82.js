function GetRandomNumber(min, max) {

    const valor = Math.random() * (max - min) + min

    return Math.floor(valor)

}

let opcao = 0

while (opcao != 7) {

    opcao = GetRandomNumber(0, 9999999)

    if (opcao != 7) {
        console.log(`Infelizmente seu número não foi sorteado!`)
    } else {
        console.log(`Parábens seu número ${opcao} foi sorteado!!!`)
    }

}

console.log("Fim...")