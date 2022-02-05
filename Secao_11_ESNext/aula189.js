
function Esperar(tempo = 2000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Executando promise...')
            resolve()
        }, tempo);
    });
}

Esperar()
.then(Esperar)
.then(Esperar)