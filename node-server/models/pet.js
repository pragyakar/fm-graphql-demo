const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const petSchema = new Schema({
  name: String,
  animal: String,
  breed: String,
  age: Number,
  imageUrl: String,
  ownerId: String
});

module.exports = mongoose.model('Pet', petSchema);