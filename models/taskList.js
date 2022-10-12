const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  name: { type: String, required: [true, "require name"], trim: true },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Tasks", TaskSchema);
