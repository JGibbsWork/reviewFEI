const models = require('../db/models.js');

const controller = {

  get: (req, res) => {
    let id = {productID: req.params.id};
    models.reviews.get(id)
    .then((results) => {
      models.products.get(req.params.id)
      .then((success) => {
        let response = {product: success, reviews: results};
        res.status(200).json(response);
      })
    })
    .catch((err) => {
      res.status(400).send(err);
    })
  },

  post: (req, res) => {
    models.users.get(req.body.email)
    .then((user) => {
      if (!user) {
        models.users.post({nickName: req.body.nickName, email: req.body.email, reviews: 1})
      } else if (user.nickName !== req.body.nickName) {
        throw new Error('user information incorrect')
      } else {
        let temp = user.reviews;
        temp ++;
        models.users.put({email: req.body.email}, {reviews: temp})
      }
    })
    .then(() => {
      models.reviews.post(req.body)
    })
    .then(() => {
      res.status(200).send('')
    })
    .catch((Error) => {
      res.status(400).send(Error)
    })
  },

  put: (req, res) => {
    models.reviews.get({email: req.body.review.email})
    .then((result) => {
      if (req.body.help === 'yes') {
        models.reviews.yes(req.body.review.email)
      } else if (req.body.help === 'no') {
        models.reviews.no(req.body.review.email)
      }
    })
    .then(() => {
      res.status(200).send('');
    })
    .catch((err) => {
      res.status(400).send(err);
    })
  },

  getUser: (req, res) => {
    models.users.get(req.params.id)
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err)=> {
      res.status(400).send(err)
    })
  }
}

module.exports = controller;