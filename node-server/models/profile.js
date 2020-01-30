const mongoose = require("mongoose");

const Schema = mongoose.schema;
const profileSchema = new Schema({
  name: String,
  imageUrl: String,
  bio: String,
  email: String,
  following: Number,
  followers: Number
});

module.exports = mongoose.model('Profile', profileSchema);