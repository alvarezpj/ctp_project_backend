const express = require('express');
const controller= require('../controllers/eventCategories');

// create router
const router = express.Router();

/* set up routes */
// create a category
router.post('/', controller.create);
// retrieve all categories
router.get('/', controller.readAll);
// retrieve all events associated to a category
router.get('/:categoryId/event', controller.readAllEvents);
// retrieve single category
router.get('/:categoryId', controller.read);
// update single category
router.put('/:categoryId', controller.update);
// delete single category
router.delete('/:categoryId', controller.delete);

// export router
module.exports = router;
