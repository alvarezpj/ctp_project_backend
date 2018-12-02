const express = require('express');
const controller= require('../controllers/events');

// create router
const router = express.Router();

/* set up routes */
// create an event
router.post('/', controller.create);
// retrieve all events
router.get('/', controller.readAll);
// retrieve single event
router.get('/:eventId', controller.read);
// update single event
router.put('/:eventId', controller.update);
// delete single event
router.delete('/:eventId', controller.delete);

// export router
module.exports = router;
