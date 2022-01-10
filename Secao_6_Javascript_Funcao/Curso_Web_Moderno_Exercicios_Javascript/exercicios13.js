function GetLetivoDays(day) {
  switch (day) {
    case 1:
      return console.log(`Dia ${day} não é um dia letivo!`);
      break
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return console.log(`Dia ${day} é um dia letivo!`);
      break
    case 7:
      return console.log(`Dia ${day} não é um dia letivo!`);
      break
    default: 
    return console.log(`Dia Inválido!!!`);
  }
}

GetLetivoDays(1);
GetLetivoDays(2);
GetLetivoDays(3);
GetLetivoDays(4);
GetLetivoDays(5);
GetLetivoDays(6);
GetLetivoDays(7);
GetLetivoDays(8);

