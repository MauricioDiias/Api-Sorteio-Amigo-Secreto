const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
require('dotenv').config();

function sendEmail(destinatarioEmail, destinatarioNome, remetendeteNome) {
  //Tarnsporte
  const token = jwt.sign(
    {
      nome: remetendeteNome,
    },
    process.env.SECRET,
    { expiresIn: 500 }
  );
  console.log({ auth: true, token });
  let transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  let info = transport.sendMail({
    from: process.env.EMAIL, // sender address
    to: destinatarioEmail, // list of receivers
    subject: "Sorteio Amigo Secreto", // Subject line
    text: "Sorteio Bot", // plain text body
    html: `<body>
    <header>
    <h6>Para: ${destinatarioEmail}</h6>
    <h2>Botdesigner</h2>
    <h3>Sorteador de Amigo Secreto</h3>
    <p>Olá ${destinatarioNome} você participou no sorteio do amigo secreto!</p>
    <a  href="https://0207-186-212-60-214.ngrok.io?${token}">
        <button
          style="
            color: #fff;
            border: none;
            background-color: #428fdc;
            font-size: 10px;
            padding: 7px 11px;
            border-radius: 3px;
            cursor: pointer;
          "> Resultao </button>
      </a>
      <p>Para acessar o resultado do sorteio ultilize o Botão acima</p>
    </header>
    <footer>
       <h6>Feliz Natal</h6> 
    </footer>
    
</body>`,
  });
}

module.exports = { sendEmail };
