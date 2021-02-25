const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  email: String,
  nickName: String,
  reviews: Number
});

module.exports = userSchema