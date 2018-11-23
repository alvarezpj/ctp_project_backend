const express = require('express');
const controller= require('../controllers/events');

// create router
const router = express.Router();

// set up routes
router.post('/', controller.create);
router.get('/:eventId', controller.read);
router.get('/', controller.readAll);
router.put('/:eventId', controller.update);
router.delete('/:eventId', controller.delete);

// export router
module.exports = router;
