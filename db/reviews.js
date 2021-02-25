const mongoose = require('mongoose');

let reviewsSchema = mongoose.Schema({
  productID: Number,
  rating: Number,
  title: String,
  review: String,
  recommended: Number,
  fit: Number,
  ageRange: Number,
  nickName: String,
  location: String,
  email: String,
  timePosted: String,
  yes: Number,
  no: Number
});

module.exports = reviewsSchema;