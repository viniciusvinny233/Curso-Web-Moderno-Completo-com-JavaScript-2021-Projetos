let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function GetNumbers(numbersArray, number) {
  for (i = 0; i < numbersArray.length; i++) {
    numberMulti = number * numbersArray[i];
    console.log(numberMulti);
  }
}

function GetNumbers2(numberMulti2, numbersArray) {
  if (numberMulti2 > 6) {
    for (i = 0; i < numbersArray.length; i++) {
      numberMulti2 = numberMulti2 * numbersArray[i];
      console.log(numberMulti2);
    }
  }
}

GetNumbers(numbers, 6);
GetNumbers2(numberMulti, numbers);
