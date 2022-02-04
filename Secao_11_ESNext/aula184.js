const http = require("http");

const getTurma = (letra, callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  http.get(url, (res) => {
    let resultado = "";

    res.on("data", (dados) => {
      resultado += dados;
    });

    res.on("end", () => {
      callback(JSON.parse(resultado));
    });
  });
};

let nomes = [];
getTurma("A", (alunos) => {
  nomes = nomes.concat(alunos.map((aluno) => `A: ${aluno.nome}`));
  console.log(nomes);
  getTurma("B", (alunos) => {
    nomes = nomes.concat(alunos.map((aluno) => `B: ${aluno.nome}`));
    console.log(nomes);
    getTurma("C", (alunos) => {
      nomes = nomes.concat(alunos.map((aluno) => `C: ${aluno.nome}`));
      console.log(nomes);
    });
  });
});
