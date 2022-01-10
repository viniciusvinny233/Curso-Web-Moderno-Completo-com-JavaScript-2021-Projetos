function GetMedia(nota1, nota2, nota3) {
  media = (nota1 + nota2 + nota3) / 3;

  if (media >= 5 && media < 10) {
    console.log(`Aluno aprovado com a nota ${media.toFixed(1).replace(".",",")}!!!`);
  } else if (media <= 4 && media > 0) {
    console.log(`Aluno reprovado com a nota ${media.toFixed(1).replace(".",",")}!!!`);
  } else {
    console.log(`Nota inválida!!!`);
  }
}

GetMedia(7, 5, 10);
GetMedia(3, 4, 5);
GetMedia(10, 15, 9);
GetMedia(0, -2, 1);
