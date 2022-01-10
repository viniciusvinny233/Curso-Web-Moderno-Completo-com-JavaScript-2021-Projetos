function verificacaoDeString(string1, string2) {

  let estaContido = true;

  for (let i = 0; i < string1.length; i++) {

    let caractereString1 = string1.charAt(i).toLowerCase();

    for (let i2 = 0; i2 < string2.length; i2++) {
      let caractereString2 = string2.charAt(i2).toLowerCase();
      
      if (caractereString1 == caractereString2) {
        estaContido = true;
        break;
      } else {
        estaContido = false;
      }
    }

    if (!estaContido) {
      return estaContido;
    }
  }
  return estaContido;
}

console.log(verificacaoDeString("zxy", "yxz"));
