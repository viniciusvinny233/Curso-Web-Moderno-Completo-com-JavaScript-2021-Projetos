function rand({min = 0, max = 100}) {
    
    if (min > max) [min, max] = [max, min]

    const valor = Math.random() * (max - min) + min

    return Math.floor(valor) 

}

var range = {min: 10, max: 30}

console.log(rand(range))