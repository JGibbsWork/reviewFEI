const faker = require('faker');
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const db = require('./index.js');
const mongoose = require('mongoose');

let users = [];
let userArr = [];

for (var i = 0; i < 100; i++) {
  let email = faker.internet.email();
  let name = faker.name.findName();
  if (i < 40) {
    users.push({name, email})
  }
  let reviews = Math.ceil(Math.random() * 5);
  userArr.push({
    email: email,
    nickName: name,
    reviews: reviews
  })
};

db.users.insertMany(userArr)
  .then(()=>{mongoose.connection.close()})

for (var j = 0; j < 20; j++) {

  let rate = Math.ceil(Math.random() * 5);
  let title = faker.lorem.slug();
  let review = faker.lorem.sentences();
  let recommended;
  let coinFlip = Math.ceil(Math.random() * 3);
  if(coinFlip > 2) {
    recommended = 1;
  } else {
    recommended = 0;
  }
  let fit = Math.ceil(Math.random() * 3);
  let age = Math.ceil(Math.random() * 8);
  let nickName = users[j].name;
  let location = faker.address.city();
  let email = users[j].email;
  let time = faker.date.recent()
  let yes = 0;
  let no = 0;

  db.reviews.create({
    productID: 128932,
    rating: rate,
    title: title,
    review: review,
    recommended: 1,
    fit: fit,
    ageRange: age,
    nickName: nickName,
    location: location,
    email: email,
    timePosted: time,
    yes: yes,
    no: no
  });
};

for (var j = 20; j < 40; j++) {

  let rate = Math.ceil(Math.random() * 5);
  let title = faker.lorem.slug();
  let review = faker.lorem.sentences();
  let recommended;
  let coinFlip = Math.ceil(Math.random() * 3);
  if(coinFlip > 2) {
    recommended = 1;
  } else {
    recommended = 0;
  }
  let fit = Math.ceil(Math.random() * 3);
  let age = Math.ceil(Math.random() * 8);
  let nickName = users[j].name;
  let location = faker.address.city();
  let email = users[j].email;
  let time = faker.date.recent()
  let yes = 0;
  let no = 0;

  db.reviews.create({
    productID: 169938,
    rating: rate,
    title: title,
    review: review,
    recommended: 1,
    fit: fit,
    ageRange: age,
    nickName: nickName,
    location: location,
    email: email,
    timePosted: time,
    yes: yes,
    no: no
  });
};

db.products.create({
  iD: 128932,
  imgUrl: "https://www.rei.com/media/95fdb76f-0653-4cd9-9a79-e08960f17df4",
  imgUrlDes: "Bontrager - Bontrager Solstice MIPS Helmet",
  name: "Bontrager Solstice MIPS Helmet"
});

db.products.create({
  iD: 169938,
  imgUrl: "https://www.rei.com/media/576a7389-782b-41eb-a179-44d225db0013",
  imgUrlDes: "Smith - Smith Venture MIPS Bike Helmet",
  name: "Smith Venture MIPS Bike Helmet"
});



console.log('seeded boiiisssssss');
