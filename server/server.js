const http = require("http")
require("dotenv").config();
const app = require("../app")
const server = http.createServer(app)
const port = process.env.PORT;
server.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`);
  });