function Calculadora(number1, number2, operacao) {
  switch (operacao) {
    case "+":
      console.log(number1 + number2);
      break;
    case "-":
      console.log(number1 - number2);
      break;
    case "*":
      console.log(number1 * number2);
      break;
    case "/":
      console.log(number1 / number2);
      break;

    default:
      console.log("Sua operação foi inválida!");
      break;
  }
}

Calculadora(10, 10, "+");
Calculadora(10, 10, "-");
Calculadora(10, 10, "*");
Calculadora(10, 10, "/");
