let nomesRecebidos = [
    'Ariane',
    'Lyndi',
    'Jamile',
    'Erisson',
    
]
embaralhar(nomesRecebidos)
function embaralhar(arr) {
    arr.forEach((element, index) => {
        let aux = Math.floor(Math.random() * (index + 1));
            [arr[index], arr[aux]] = [arr[aux], arr[index]];
        
    });
}

function sortear(){
    embaralhar(nomesRecebidos)
    let sorteados = []
    nomesRecebidos.forEach((element,index) => {
        sorteados.push([
            nomesRecebidos[index],
            nomesRecebidos[index!= nomesRecebidos.length - 1 ? +1 : 0]
        ])
        console.log(sorteados)
    })
}
sortear()

