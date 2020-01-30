const mongoose = require("mongoose");

const Schema = mongoose.schema;
const petSchema = new Schema({
  name: String,
  animal: String,
  breed: String,
  age: Number,
  imageUrl: String,
});

module.exports = mongoose.model('Pet', petSchema);