// require("dotenv").config();

// const rota = process.env.ROTA_V3;

// async function getApi(listaDeUsuarios) {
//   try {
//     let header = new Headers({
//       "Content-Type": "application/json",
//     });
//     let request = await fetch(rota, {
//       method: "POST",
//       headers: header,
//       body: JSON.stringify({ listaDeUsuarios }),
//     });
//     request
//       .json()
//       .then((sorteados) => {
//         // console.log(sorteados)
//       })
//       .catch((err) => console.log("err=", err));
//   } catch (error) {
//     console.log("eror");
//   }
// }
// async function imprimirNaTela() {
//   await getApi(participantes);
// }
// /* -------------------------------- */
// module.exports = { imprimirNaTela };
