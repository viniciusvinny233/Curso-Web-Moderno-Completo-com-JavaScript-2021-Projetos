function rand({min, max}) {
    
    const valor = Math.random() * (max - min) + min

    return valor

}

const range = {min: 10, max: 20}

console.log(Math.floor(rand(range)))