function Carros(VeloMax = 450, Aceleracao = 45) {
    
    let VeloAtual = 0

    this.correr = function () {

        if (VeloAtual < VeloMax) {
            VeloAtual += Aceleracao
        } else {
            VeloAtual = VeloMax
        }
    }

    this.getValorAtualAcelerado = () => {return VeloAtual}

}

const Lambo = new Carros
Lambo.correr()
Lambo.correr()
Lambo.correr()
Lambo.correr()

const Uno = new Carros
Uno.correr()
Uno.correr()
Uno.correr()
Uno.correr()

console.log(Uno.getValorAtualAcelerado())
console.log(Lambo.getValorAtualAcelerado())



// Var "Objeto" = new "Função" CRIAM UM OBJETO PARA A FUNCAO
// this. APONTA PARA O OBJETO QUE ESTÁ EM EXECUÇÃO
// Var, let e const PRIVAM O DADO DO USUARIO
// FUNCAO RECEBE UM OBJETO PARA A EXECUÇÃO