const express = require("express");
const userModel = require("../src/models/user.model");

const app = express();
const port = 8080;

app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "src/views");

app.get("/views/users", async (req, res) => {
  const list = await userModel.find({});

  res.render("index", { users: list });
});

app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(req.body);
  console.log(`Request Type: ${new Date()}`);
  next();
});

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1> Pagina Principal</h1>");
});

app.get("/users", async (req, res) => {
  try {
    const obj = await userModel.find({});
    res.status(200).json(obj);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const obj = await userModel.findById(id);
    res.status(200).json(obj);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userModel.findByIdAndDelete(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}!`);
});
