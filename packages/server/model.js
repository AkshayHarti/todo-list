const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  text: { type: String, default: "" }
});

const Todos = mongoose.model("todos", userSchema);

module.exports = {
  Todos
};
