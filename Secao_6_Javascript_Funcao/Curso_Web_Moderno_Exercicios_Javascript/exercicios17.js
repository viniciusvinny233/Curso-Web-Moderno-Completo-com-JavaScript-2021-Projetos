function PlanoSalario(salario, plano) {
  let salarioFinal;

  switch (plano) {
    case "A":
      salarioFinal = salario + (salario * 0.1);
      console.log(salarioFinal)
      break;
    case "B":
      salarioFinal = salario + (salario * 0.15);
      console.log(salarioFinal)
      break;
    case "C":
      salarioFinal = salario + (salario * 0.2);
      console.log(salarioFinal)
      break;

    default:
      console.log("Plano de salário inválido!");
      break;
  }
}

PlanoSalario(1000, "A")
PlanoSalario(1000, "B")
PlanoSalario(1000, "C")
PlanoSalario(1000, "D")
