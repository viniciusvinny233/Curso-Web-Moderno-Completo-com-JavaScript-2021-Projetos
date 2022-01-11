//Funcao construtora
function GetProduto(nome, preco, vencimento, desc) {
  this.nome = nome;
  this.precoComDesc = () => {
    return preco * (1 - desc);
  };
  this.vencimento = vencimento;
}
let detergente = new GetProduto("Detergente", 20, "21/09/2022", 0.25);

console.log(detergente);
console.log(detergente.precoComDesc());

//Object JS
const obj = {};
console.log(obj);

//Notação literal
let atleta = {
  nome: "FNX",
  medalhas: 987,
  altura: 1.82,
};

console.log(atleta);

//Object.create
const pessoa = Object.create(null);
pessoa.idade = 17;

console.log(pessoa);

//funcao factory
function CreateFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    salarioFinal: function() {
      return (salarioBase / 30) * (30 - faltas);
    }
  };
}
const func1 = new CreateFuncionario("Gabriel", 4500, 2);
const func2 = new CreateFuncionario("Fernanda", 8500, 1);

console.log(func1);
console.log(func2);

console.log(func1.salarioFinal());
console.log(func2.salarioFinal());
