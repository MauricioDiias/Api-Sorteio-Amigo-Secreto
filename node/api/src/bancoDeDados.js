const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

let nomesRecebidos = []

function salvarNomes(nome) {
    if (!nome.id) nome.id = sequence.id
    nomesRecebidos[nome.id] = nome
    sortear(nome)
    return nome
}

function getNome(id) {
    return nomesRecebidos[id] || []
}

function getNomes() {
    return nomesRecebidos
}
// console.log(nomesRecebidos)
function embaralhar(arr) {
    arr.forEach((element, index) => {
        let aux = Math.floor(Math.random() * (index + 1));
        [arr[index], arr[aux]] = [arr[aux], arr[index]];

    });
}

function sortear() {
    embaralhar(nomesRecebidos)
    let sorteados = []
    nomesRecebidos.forEach((element, index) => {
        sorteados.push([
            nomesRecebidos[index],
            nomesRecebidos[index != nomesRecebidos.length - 1 ? index + 1 : 0]
        ])
    })
    console.log(sorteados)
}

module.exports = {salvarNomes, getNome, getNomes, sortear}
