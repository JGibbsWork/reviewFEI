const mongoose = require('mongoose');

let productSchema = mongoose.Schema({
  iD: Number,
  imgUrl: String,
  imgUrlDes: String,
  name: String
});

module.exports = productSchema;