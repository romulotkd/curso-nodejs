const express = require("express");
const app = express();
const port = 8080;

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1> Pagina Principal</h1>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "Romulo Costa",
      email: "romulo@gmail.com",
    },
    {
      name: "Patricia Costa",
      email: "patricia@gmail.com",
    },
  ];

  res.status(200).json(users);
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}!`);
});
