const card1 = 1
const card2 = 2
const card3 = 3
const card4 = 4
const card5 = 5

var randomNumber = Math.floor(Math.random() * 5 + 1)

function EscolheCard(randomNumber, card1, card2, card3, card4, card5) {

    if (randomNumber == card1) {

        console.log(`É o card 1`)

    } if (randomNumber == card2) {

        console.log(`É o card 2`)

    } if (randomNumber == card3) {

        console.log(`É o card 3`)

    } if (randomNumber == card4) {

        console.log(`É o card 4`)

    } if (randomNumber == card5) {

        console.log(`É o card 5`)

    }

}

EscolheCard(randomNumber, card1, card2, card3, card4, card5);