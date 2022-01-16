var aprovado = ["Gabriel", "Fernando", "Felipe", "Julia"];

aprovado.forEach((nomes, i, array) => {
  console.log(`${i + 1}: ${nomes}`);
  console.log(array)
});

aprovado.forEach((nome) => {
  console.log(`${nome}`);
});

aprovado.forEach(nome => console.log(nome))