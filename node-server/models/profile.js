const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const profileSchema = new Schema({
  name: String,
  imageUrl: String,
  bio: String,
  email: String
});

module.exports = mongoose.model('Profile', profileSchema);