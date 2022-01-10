function Calculo3(number) {
  calculoInteiro = number / 3;

  console.log(`Resultado inteiro: ${calculoInteiro}`);

  calculoResto = number % 3;

  console.log(`Resultado resto: ${calculoResto}`);

  if (calculoResto == 0) {
    return console.log("true");
  } else {
    return console.log("false");
  }
}

Calculo3(15);
