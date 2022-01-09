const ImprimirNota = function (nota) {

    switch (Math.floor(nota)) {

        case 10: case 9:
            console.log("Parábens, sua nota foi incrível!!!")
            break

        case 7: case 8:
            console.log("Parábens, você foi aprovado!!!")
            break

        case 6:
            console.log("Você foi aprovado!!!")
            break

        case 4: case 5:
            console.log("Você está de recuperação!")
            break

        case 3: case 2: case 1: case 0:
            console.log("Você está retido!")
            break

        default:
            console.log("Nota Inválida!")

    }

}

ImprimirNota(1)
ImprimirNota(2)
ImprimirNota(3)
ImprimirNota(4)
ImprimirNota(5)
ImprimirNota(6)
ImprimirNota(7)
ImprimirNota(8)
ImprimirNota(9)
ImprimirNota(10)
ImprimirNota(11)
