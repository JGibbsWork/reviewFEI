const db = require('./index.js');
const mongoose = require('mongoose');

const reviews = {
  get: (item) => db.reviews.find(item),
  post: (item) => db.reviews.create(item),
  yes: (email) => {
    db.reviews.update({email: email}, {$inc: {yes: 1}})
    .then(()=>{console.log('we did it')})
  },
  no: (email) => {
    db.reviews.update({email: email}, {$inc: {no: 1}})
    .then(()=>{console.log('we did it')})
  }
};

const users = {
  get: (email) => db.users.findOne({email}),
  post: (item) => db.users.create(item),
  put: (email, reviews) => db.users.update(email, reviews)
};

const products = {
  get: (id) => db.products.find({iD: id})
};

module.exports = {reviews, users, products};