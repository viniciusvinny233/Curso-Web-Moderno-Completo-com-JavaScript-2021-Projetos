const GetFirstElement = resposta => resposta[0]
const letraMinuscula = letra =>  letra.toLowerCase()

new Promise((resolve, reject) => {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(GetFirstElement)
    .then(GetFirstElement)
    .then(letraMinuscula)
    .then(console.log)