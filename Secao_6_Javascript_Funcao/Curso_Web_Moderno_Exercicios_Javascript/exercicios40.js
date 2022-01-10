function ClassificaNota(nota) {
  if (nota >= 0 && nota <= 4.9) {
    console.log(`Sua nota foi ${nota} foi D`);
  } else if (nota >= 5 && nota <= 6.9) {
    console.log(`Sua nota foi ${nota} foi C`);
  } else if (nota >= 7 && nota <= 8.9) {
    console.log(`Sua nota foi ${nota} foi B`);
  } else if (nota >= 9 && nota <= 10) {
    console.log(`Sua nota foi ${nota} foi A`);
  } else {
    console.log(`Sua nota foi ${nota} é inválida!!!`);
  }
}

ClassificaNota(-1);
ClassificaNota(0);
ClassificaNota(1);
ClassificaNota(2);
ClassificaNota(3);
ClassificaNota(4);
ClassificaNota(5);
ClassificaNota(6);
ClassificaNota(7);
ClassificaNota(8);
ClassificaNota(9);
ClassificaNota(10);
ClassificaNota(11);
