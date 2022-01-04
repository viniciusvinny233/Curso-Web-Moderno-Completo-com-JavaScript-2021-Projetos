function decisoes(passarAno, arrumarTrabalho) {

    var matricularFaculdade = passarAno && arrumarTrabalho
    var meMudar = passarAno || arrumarTrabalho
    var morarMae = !meMudar
    var estudarMais = passarAno != arrumarTrabalho

    return {matricularFaculdade, meMudar, morarMae, estudarMais}
    
}

console.log(decisoes(false, true))