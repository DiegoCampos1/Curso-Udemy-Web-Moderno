const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

const chineses = (f) => f.pais === "China";
const mulheres = (f) => f.genero === "F";
const menorSalario = (a, b) => {
  return a.salario < b.salario ? a : b;
};

axios.get(url).then((response) => {
  const funcionarios = response.data;
  const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario);
  console.log(func);
});
// Retornar mulher chinesa com menor salario genero mulher. Dica Map reduce e filter
