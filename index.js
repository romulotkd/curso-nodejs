// const { Person } = require("./person");
const connectBD = require("./src/database/connect");
const dotenv = require("dotenv");

// Configura as variaveis de ambiente
dotenv.config();

// Conectando com o banco de dados.
connectBD();

// const person = new Person("Romulo Costa Regis");

// require("./modules/path");
// require("./modules/fs");
// require("./modules/http");
require("./modules/express");
//console.log(person.sayName());
