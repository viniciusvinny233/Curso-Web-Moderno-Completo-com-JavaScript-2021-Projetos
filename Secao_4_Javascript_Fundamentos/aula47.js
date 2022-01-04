var produto1 = {}

produto1.name = "Galaxy S21 Ultra"
produto1.preco = {}
produto1.preco.pix = 5.600
produto1.preco.cartao = 5.999
produto1.camera = {}
produto1.camera.traseira = "8k 60fps"
produto1.camera.frontal = "4k 60fps"
produto1.ano = 2021

var produto2 = {}

produto2.name = "Galaxy Note 20 Ultra"
produto2.preco = {}
produto2.preco.pix = 3.600
produto2.preco.cartao = 3.999
produto2.camera = {}
produto2.camera.traseira = "4k 60fps"
produto2.camera.frontal = "1080p 30fps"
produto2.ano = 2020

var celulares = [produto1, produto2]

celulares.sort(function (a, b) {

    return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);

});

console.log(celulares.sort())



var produto1var = {

    name: "Galaxy S21 Ultra",
    preco: {
        pix: 5.600,
        cartao: 5.999
    },
    camera: {
        traseira: "8k 60fps",
        frontal: "4k 60fps",
    },
    ano: 2021

}

var produto2var = {

    name: "Galaxy Note 20 Ultra",
    preco: {
        pix: 3.600,
        cartao: 3.999
    },
    camera: {
        traseira: "4k 60fps",
        frontal: "1080p 30fps",
    },
    ano: 2020

}

var celularesVar = [produto1var, produto2var]

celularesVar.sort(function (a, b) {

    return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);

});

console.log(celularesVar.sort())