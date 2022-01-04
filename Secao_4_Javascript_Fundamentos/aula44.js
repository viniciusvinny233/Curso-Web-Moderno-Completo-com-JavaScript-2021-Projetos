var arrayNames = "Julia,Lucas,Fernanda".split(",")

for (let index = 0; index < arrayNames.length; index++) {

    var recepcaoCompleta = `oi ${arrayNames[index]}!`

    console.log(`${recepcaoCompleta}`)

    if (index < 2) {

        console.log(`Ainda tem...
        `)

    }

}

if (index = 2) {

    console.log(`Acabou...
    `)

}

console.log(`Ao total foram ${arrayNames.length} convidados!`)
