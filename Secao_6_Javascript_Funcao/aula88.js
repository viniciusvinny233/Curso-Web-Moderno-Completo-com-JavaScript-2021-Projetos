function fun(a, b) {
  return a + b;
}

const array = [fun(5, 1), 7, 8, 9];

for (i in array) {
  console.log(array[i]);
}

function soma(a, b) {
  return function (c) {
    return console.log(a + b + c);
  };
}

soma(2, 4)(4);
