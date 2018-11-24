const express = require('express');
const controller= require('../controllers/users');

// create router
const router = express.Router();

// set up routes
router.post('/', controller.create);
router.get('/:userId', controller.read);
router.put('/:userId', controller.update);

// export router
module.exports = router;
