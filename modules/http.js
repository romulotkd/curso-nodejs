const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url == "/home") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1> Pagina Principal</h1>");
  }

  if (req.url == "/users") {
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
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => {
  console.log(`Rodando na porta ${port}!`);
});
