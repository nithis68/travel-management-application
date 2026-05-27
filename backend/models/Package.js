const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
  place: String,
  price: String,
  image: String,
});

module.exports = mongoose.model("Package", packageSchema);
