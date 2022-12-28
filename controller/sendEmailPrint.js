const nodemailer = require("nodemailer");
require("dotenv").config();

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
  console.log("duplas=", duplas);
  duplas.forEach((item) => {
    mandaNomeEail(item[0].email, item[0].nome, item[1].nome);
  });
  return duplas;
}

function mandaNomeEail(destinatario, destinatarioNome, nome) {
  //TRANSPORTE
  let transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  //CONFIGURAÇÃO DO EMAIL
  let info = transport.sendMail({
    from: process.env.EMAIL, // sender address
    to: destinatario, // list of receivers
    subject: "Sorteio Amigo Secreto", // Subject line
    text: "Sorteio Bot", // plain text body
    html: `<body>
      <header>
      <h6>Para: ${destinatario}</h6>
      <h2>Botdesinger</h2>
      <h3>Sorteador de Amigo Secreto</h3>
      <p>Olá ${destinatarioNome} voce pegou <strong>${nome}</strong> no sorteio do amigo secreto! </p>
      </header>
      <footer>
         <h6>Feliz Natal</h6> 
      </footer>
      
  </body>`, // html body
  });
}

module.exports = { sortearNomes };
