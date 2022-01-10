const numbers = [42,526,51389,5923,51,851]

function GetMedia(numbers) {

    let firstNumber = 0

    for (i in numbers) {
        
        this.somaNumbers = firstNumber + numbers[i]

        firstNumber = somaNumbers

    }

    this.media = somaNumbers / numbers.length

    return console.log(`A média dos números é: ${this.media}`)

}

GetMedia(numbers)