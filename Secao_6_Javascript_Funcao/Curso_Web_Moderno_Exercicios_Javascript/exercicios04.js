function Divisao(dividendo, divisor) {
  resultado = Math.floor(dividendo / divisor);

  console.log("Resultado: " + resultado);

  resultadoResto = dividendo % divisor;

  console.log("Resto: " + resultadoResto);
}

Divisao(11, 4);
