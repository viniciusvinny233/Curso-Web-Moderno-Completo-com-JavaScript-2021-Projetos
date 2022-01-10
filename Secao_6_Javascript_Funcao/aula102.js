function Carros(veloMax = 200, aceleracao = 5) {
  let veloAtual = 0;

  this.acelerar = function () {
    if (veloAtual <= veloMax) {
      veloAtual += aceleracao;
    } else {
      veloAtual = veloMax;
    }
  };

  this.getVeloAtual = () => {
    return veloAtual;
  };
}

const uno = new Carros;
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
console.log(uno.getVeloAtual());
