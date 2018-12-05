const express = require('express');
const controller= require('../controllers/newYorkCityNeighborhoods');

// create router
const router = express.Router();

/* set up routes */
// retrieve all neighborhoods
router.get('/', controller.readAll);
// retrieve single neighborhood
router.get('/:neighborhoodName', controller.read);
// retrieve all events associated to a neighborhood 
router.get('/:neighborhoodId/event', controller.readAllEvents);

// export router
module.exports = router;
