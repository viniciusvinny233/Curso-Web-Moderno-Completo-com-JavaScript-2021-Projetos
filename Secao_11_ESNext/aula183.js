function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase);
    }, segundos * 1000);
  });
}

falarDepoisDe(3, "Funcionou!")
  .then((frase) => frase.concat("!!"))
  .then((outraFase) => console.log(outraFase));
