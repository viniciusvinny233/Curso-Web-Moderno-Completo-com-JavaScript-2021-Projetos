const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

axios.get(url).then((response) => {
  const funcionarios = response.data;
  let chines = [];
  let chinesa = [];

  for (i in funcionarios) {
    if (funcionarios[i].pais == "China") {
      chines.push(funcionarios[i]);
    }
  }
  for (i in chines) {
    if (chines[i].genero == "F") {
      chinesa.push(chines[i]);
    }
  }

  let piorSalario;

  for (i in chinesa) {
    if (piorSalario == undefined) {
      piorSalario = chinesa[i].salario;
    }

    if (chinesa[i].salario < piorSalario) {
      piorSalario = chinesa[i].salario;
      chinesaPobre = chinesa[i];
    }
  }
  console.log(chinesaPobre);
});
