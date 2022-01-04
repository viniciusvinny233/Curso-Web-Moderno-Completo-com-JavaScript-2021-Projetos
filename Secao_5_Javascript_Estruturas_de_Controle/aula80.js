Number.prototype.entre = function (inicio, fim) {

    return this >= inicio && this <= fim

}

const ImprimirResult = function (nota) {

    if (nota.entre(9, 10)) {

        console.log("Parábens, sua nota foi incrível!!!")

    } else if (nota.entre(7, 8.99)) {
     
        console.log("Parábens, você foi aprovado!!!")

    } else if (nota.entre(6, 6.99)) {
     
        console.log("Você foi aprovado!!!")

    } else if (nota.entre(4.5, 5.99)) {
     
        console.log("Você está de recuperação!")

    } else if (nota.entre(0, 4.49)) {
     
        console.log("Você está retido!")

    } else {

        console.log("Nota Inválida!")

    }

}

ImprimirResult(18)