const consulta = 'http://localhost:3003/ola'
const cliente = []
const texto = document.querySelector('#teste')
getApi()
console.log(consulta)

async function getApi() {
    const res = await fetch(consulta);
    cliente = await res.json();
  console.log(cliente)
  
  }
cliente.forEach( (element) =>{
    texto.innerHTML += (
        `<div class="fabio">${element}</div>`
    )
})