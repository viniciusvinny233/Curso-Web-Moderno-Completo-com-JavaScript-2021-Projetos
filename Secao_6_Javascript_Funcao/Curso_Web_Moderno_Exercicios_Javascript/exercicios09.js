function AvaliaAluno(nota) {
  resto = nota % 5;

  if (nota > 100 || nota < 0) {
    console.log(`Nota ${nota} inválida!`);
  } else {
    if (nota <= 37) {
      console.log(`O aluno foi reprovado com a ${nota}!!!`);
    } else {
      if (resto == 0) {
        console.log(`O aluno foi aprovado com a ${nota}!!!`);
      } else {
        if (resto >= 3) {
          notaFinal = nota + 5 - resto;
          console.log(`O aluno foi aprovado com a ${notaFinal}!!!`);
        } else {
          notaFinal = nota - resto;
          console.log(`O aluno foi aprovado com a ${notaFinal}!!!`);
        }
      }
    }
  }
}

AvaliaAluno(-5);
AvaliaAluno(24);
AvaliaAluno(38);
AvaliaAluno(52);
AvaliaAluno(100);
AvaliaAluno(102);
