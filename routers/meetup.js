const express = require('express');
const controller= require('../controllers/meetup');

// create router
const router = express.Router();

/* set up routes */
// retrieve all neighborhoods
router.post('/', controller.api_request);


// export router
module.exports = router;
