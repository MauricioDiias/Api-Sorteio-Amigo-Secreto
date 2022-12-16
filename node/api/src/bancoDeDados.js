const sequence = {
  _id: 1,
  get id() {
    return this._id++;
  },
};

let nomesRecebidos = [];

function salvarNomes(nome) {
  if (!nome.id) nome.id = sequence.id;
  nomesRecebidos[nome.id] = nome;
  return nome;
}

function getNome(id) {
  return nomesRecebidos[id] || [];
}

function getNomes() {
  return nomesRecebidos;
}
// console.log(nomesRecebidos)
function embaralhar(teste) {
  teste.forEach((element, index) => {
    let aux = Math.floor(Math.random() * (index + 1));
    [teste[index], teste[aux]] = [teste[aux], teste[index]];
  });
}

function sortear(teste) {
  embaralhar(teste);
  let sorteados = [];
  teste.map((element, index) => {
    sorteados.push([
      teste[index],
      teste[index != teste.length - 1 ? index + 1 : 0],
    ]);
    
  });
  return sorteados
  
}

module.exports = { salvarNomes, getNome, getNomes, sortear };
