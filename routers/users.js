const express = require('express');
const controller= require('../controllers/users');

// create router
const router = express.Router();

/* set up routes */
// create an user
router.post('/', controller.create);
// create an user-event association in users_events join table
router.post('/:userId/event/:eventId', controller.joinEvent);
// retrieve all events associated to a user
router.get('/:userId/event', controller.readAllEvents);
// retrieve single user
router.get('/:userId', controller.read);
// update single user
router.put('/:userId', controller.update);

// export router
module.exports = router;
