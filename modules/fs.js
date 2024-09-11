const fs = require("fs");
const path = require("path");

// Criar uma pasta por aqui
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     return console.log("Houve um erro na pasta", error);
//   }
//   return console.log("Pasta criada com sucesso.");
// });

// Criar um arquivo na pasta test.
fs.writeFile(
  path.join(__dirname, "/test", "teste.txt"),
  "Linha de texto no arquivo criado.",
  (error) => {
    if (error) {
      return console.log("Houve um erro no arquivo: ", error);
    }
    console.log("Arquivo criado com sucesso.");

    fs.appendFile(
      path.join(__dirname, "/test", "teste.txt"),
      "Nova linha de texto no arquivo criado.",
      (error) => {
        if (error) {
          return console.log("Houve um erro na edição do arquivo: ", error);
        }
        console.log("Arquivo modificado com sucesso.");

        fs.readFile(
          path.join(__dirname, "/test", "teste.txt"),
          "utf8",
          (error, data) => {
            if (error) {
              return console.log("Houve um erro na leitura: ", error);
            }
            console.log(data);
          }
        );
      }
    );
  }
);
