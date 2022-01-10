const numbers = [
  51, 52, 42, 91, 3812, 942, 91, 81, 39, 168, 12, 9, 97, 2, 94, 39, 4,
];

function GetMinMax(numbers) {
  let min;
  let max;
  for (i in numbers) {
    if (min === undefined && max == undefined) {
      min = numbers[i];
      max = numbers[i];
    } else if (max < numbers[i]) {
      max = numbers[i];
    } else if (min > numbers[i]) {
      min = numbers[i];
    }
  }
  console.log(`O menor número é: ${min}
O maior número é: ${max}`);
}

GetMinMax(numbers);
