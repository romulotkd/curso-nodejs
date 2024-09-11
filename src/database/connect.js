const mongoose = require("mongoose");

const connectToDatabase = async () => {
  const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cursonodejs.kij30.mongodb.net/database?retryWrites=true&w=majority&appName=CursoNodeJS`;
  console.log("URL: " + uri);

  await mongoose.connect(uri).then(
    () => {
      console.log("Conexão ao banco de dados realizada com sucesso!");
    },
    (err) => {
      console.log("Ocorreu um erro ao se conectar com o banco de dados: ", err);
    }
  );
};

module.exports = connectToDatabase;
