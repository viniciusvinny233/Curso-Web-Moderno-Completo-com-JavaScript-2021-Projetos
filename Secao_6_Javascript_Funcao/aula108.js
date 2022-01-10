function Pessoa(nome) {
    this.nome = nome;

    this.falar = () => console.log(`Olá ${this.nome}`);
}

const p1 = new Pessoa("Pedro");
const p2 = new Pessoa("Marcos");
const p3 = new Pessoa("Lucas");

p1.falar();

p2.falar();

p3.falar();
