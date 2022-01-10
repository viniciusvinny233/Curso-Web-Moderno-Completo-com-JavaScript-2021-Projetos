function soma1(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;

  return a + b + c;
}

console.log(soma1(0, 4, 5));

function soma2(a, b, c) {
  a = a !== undefined ? a : 1;
  b = b !== undefined ? b : 1;
  c = c !== undefined ? c : 1;

  return a + b + c;
}

console.log(soma2(0, 4, 5));

function soma3(a, b, c) {
  a = a == NaN ? 1 : a;
  b = b == NaN ? 1 : b;
  c = c == NaN ? 1 : c;

  return a + b + c;
}

console.log(soma3(0, 4, 5));

function soma4(a, b, c) {
  a = 0 in arguments ? a : 1;
  b = 1 in arguments ? b : 1;
  c = 2 in arguments ? c : 1;

  return a + b + c;
}

console.log(soma4(0, 4, 5));

function soma5(a = 1, b = 1, c = 1) {
  return a + b + c;
}

console.log(soma5(0, 4, 5));
