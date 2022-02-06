const fs = require("fs");
const path = require("path");


function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function (_, conteudo) {
            resolve(conteudo.toString())
        })
        console.log("Executando...")
    });
}


const caminho = path.join(__dirname, "dados.txt");
lerArquivo(caminho)
    .then(console.log)