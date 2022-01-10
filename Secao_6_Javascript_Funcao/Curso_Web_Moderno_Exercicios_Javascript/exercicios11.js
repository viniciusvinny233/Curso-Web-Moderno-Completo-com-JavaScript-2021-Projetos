function GetBiAno(ano) {
    
    calculaResto = ano%4

    if (calculaResto == 0) {
        console.log(`O ano ${ano} é um ano bisesxto`)
    } else {
        console.log(`O ano ${ano} não é um ano bisesxto`)
    }

}

let ano = 2000

for (index = 2000; index < 3000; index++) {

    GetBiAno(ano)
    
    ano++

}

