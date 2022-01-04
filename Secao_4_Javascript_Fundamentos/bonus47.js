var randomNumber = Math.floor(Math.random() * 2 + 1)

if (randomNumber == 1) {
    
    var nameProduto = "Baby"

}

if (randomNumber == 2) {
    
    var nameProduto = "Bitch"

}

var randomNumber1 = Math.floor(Math.random() * 2 + 1)

if (randomNumber1 == 1) {
    
    var valorProduto = 5.999

}

if (randomNumber1 == 2) {
    
    var valorProduto = 5.599

}

var produto1 = {}

produto1.name = nameProduto
produto1.preco = valorProduto
produto1.camera = {}
produto1.camera.traseira = "8k 60fps"
produto1.camera.frontal = "4k 60fps"
produto1.ano = 2021

console.log(produto1)