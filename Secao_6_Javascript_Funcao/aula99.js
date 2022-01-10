const alunos = ["Pedro", "Miguel", "Gabriel"]

alunos.forEach(index => {
    console.log(`${index}: `)
});

function imprimir(nome, index) {
    console.log(`${index + 1}: ${nome}`)
}

alunos.forEach(imprimir)