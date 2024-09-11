const path = require("path");

//Apenas o nome do arquivo atual
console.log(path.basename(__filename));

//Nome do diretório atual
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

//Criar o objeto path
console.log(path.parse(__filename));

//Juntar caminhos de arquivos
console.log(path.join(path.parse(__filename).root, "pasta 1", "pasta 2"));
console.log(path.join(__dirname, "pasta 1", "pasta 2"));
