const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const mongoUri = "mongodb+srv://reviews:36WBMWNFj2nxgfAa@cluster0.p3ooh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
const users = require('./users.js');
const products = require('./products.js');
const reviews = require('./reviews.js')
//const mongoUri = 'mongodb://localhost/reviews';
mongoose.Promise = global.Promise;

let db = mongoose.connect(mongoUri)
  .then(()=>{console.log('mongo mongo in da house in da house')})

let Users = mongoose.model('Users', users);
let Products = mongoose.model('Products', products);
let Reviews = mongoose.model('Reviews', reviews);

module.exports = {users: Users, products: Products, reviews: Reviews, db: db};

