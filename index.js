const consulta = "http://localhost:3003/ola";
const cliente = [];
const texto = document.querySelector("#teste");
getApi();
console.log(consulta);

async function getApi() {
  try {
    const res = await fetch(consulta);
    cliente = await res.json();
  } catch (error) {
    console.log("eror");
  }
}
cliente.forEach((element) => {
  texto.innerHTML += `<div class="texto">${element}</div>`;
});