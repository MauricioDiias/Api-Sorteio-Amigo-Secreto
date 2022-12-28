const api = require("./sendEmailToken");

function embaralhar(nome) {
  nome.map((_element, index) => {
    let aux = Math.floor(Math.random() * (index + 1));
    [nome[index], nome[aux]] = [nome[aux], nome[index]];
  });
  return nome;
}

function sortearNomes(nome) {
  let mudaPocicao = embaralhar(nome);
  let duplas = [];
  mudaPocicao.map((_element, index) => {
    duplas.push([
      nome[index],
      nome[index != nome.length - 1 ? index + 1 : 0],
    ]);
  });
  duplas.forEach((item) => {
    // console.log(item);
    api.sendEmail(item[0].email, item[0].nome, item[1].nome);
  });
  return duplas;
}
module.exports = { sortearNomes };
