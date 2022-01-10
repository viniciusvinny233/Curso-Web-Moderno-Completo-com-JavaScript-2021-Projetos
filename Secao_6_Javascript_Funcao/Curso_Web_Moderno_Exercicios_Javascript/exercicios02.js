function Triangulo(lado1, lado2, lado3) {
  if (lado1 == lado2 && lado2 == lado3) {
    console.log("Esse triângulos é Equilátero");
  } else if (lado1 != lado2 && lado2 != lado3) {
    console.log("Esse triângulos é Escaleno");
  } else {
    console.log("Esse triângulos é Isósceles");
  }
}

Triangulo(10, 10, 10);
