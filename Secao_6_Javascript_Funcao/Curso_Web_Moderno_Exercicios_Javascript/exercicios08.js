const pontuacaoJogos = [10, 20, 20, 8, 25, 3, 0, 30, 1];
let resultado = [];

function CalculaJogos(pontuacaoJogos) {
  let recorde;
  let worstGame;
  let contadorRecorde = -1;
  let contadorlength = 2;

  for (i in pontuacaoJogos) {
    if (recorde == undefined && worstGame == undefined) {
      recorde = pontuacaoJogos[i];
      worstGame = pontuacaoJogos[i];
    }
    if (pontuacaoJogos[i] > recorde) {
      contadorRecorde++;
    }
    if (pontuacaoJogos[i] < worstGame) {
      worstGame = pontuacaoJogos[i];
      indexToInt = parseInt(i);
      contadorlength = indexToInt + 1;
    }
  }
  resultado.push(contadorRecorde);
  resultado.push(contadorlength);
}

CalculaJogos(pontuacaoJogos);
console.log(resultado);