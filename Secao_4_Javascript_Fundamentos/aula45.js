var arrayNames = "Pedro, Julia,,Gabriel,".split(",")

for (let index = 0; index < arrayNames.length; index++) {

    var names = arrayNames[index]

    if (names == "") {
        console.log(`Nome inválido
`)

    } else {

        var final = `Olá ${names}
Seja bem vindo
        `

        console.log(final)
    }



}

