let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function WriteNumber(numbers) {
  for (i in numbers) {
    numbersIndex = numbers[i];

    switch (numbersIndex) {
      case 0:
        console.log(numbersIndex + ": Zero");
        break;
      case 1:
        console.log(numbersIndex + ": Um");
        break;
      case 2:
        console.log(numbersIndex + ": Dois");
        break;
      case 3:
        console.log(numbersIndex + ": Três");
        break;
      case 4:
        console.log(numbersIndex + ": Quatro");
        break;
      case 5:
        console.log(numbersIndex + ": Cinco");
        break;
      case 6:
        console.log(numbersIndex + ": Seis");
        break;
      case 7:
        console.log(numbersIndex + ": Sete");
        break;
      case 8:
        console.log(numbersIndex + ": Oito");
        break;
      case 9:
        console.log(numbersIndex + ": Nove");
        break;
      case 10:
        console.log(numbersIndex + ": Dez");
        break;

      default:
        console.log("Número fora do intervalo!")
        break;
    }
  }
}

WriteNumber(numbers)