const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  text: String
});

const Todos = mongoose.model("todos", userSchema);

module.exports = {
  Todos
};
