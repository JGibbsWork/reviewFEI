const router = require('express').Router();
const controller = require('./controller.js');

router
.route('/reviews/:id')
.get(controller.get)
.post(controller.post)
.put(controller.put)

// router
// .route('/user/:id')
// .get(controller.getUser)

module.exports = router;