const alunos = ["Pedro", "Elisa", "Matheus", "Gabriel", "Felipe"];

for (i in alunos) {
  if (i == 0) {
    console.log(`Lista de alunos 3CA:`);
  }

  if (i == 3) {
    break;
  }

  console.log(`${i}: ${alunos[i]}`);
}

console.log(`


`);

for (i2 in alunos) {
  if (i2 == 3) {
    console.log(`${i2}: Aluno ${alunos[i2]} retido!!!`);
    continue;
  }

  console.log(`${i2}: ${alunos[i2]}`);
}
