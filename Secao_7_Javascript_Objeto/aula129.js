class Lancamento {
  constructor(nome = "Genérico", valor = 0) {
    this.nome = nome;
    this.valor = valor;
  }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
      }

  addLancamento(...lancamentos) {
    lancamentos.forEach((l) => this.lancamentos.push(l));
  }

  sumario() {
    let valorConsolidado = 0;
    this.lancamentos.forEach((l) => {
      valorConsolidado += l.valor;
    });
    return valorConsolidado;
  }
}

const salario = new Lancamento("Salário", 1000);
const contaLuz = new Lancamento("Conta Luz", -410);

const contas = new CicloFinanceiro(6, 2018);
contas.addLancamento(salario, contaLuz);
console.log(contas.sumario());
