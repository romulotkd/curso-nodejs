const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
  },
});

const UserModel = mongoose.model("Usuario", userSchema);

module.exports = UserModel;
