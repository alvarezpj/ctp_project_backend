const express = require('express');
const controller= require('../controllers/eventCategories');

// create router
const router = express.Router();

// set up routes
router.post('/', controller.create);
router.get('/:categoryId', controller.read);
router.get('/', controller.readAll);
router.put('/:categoryId', controller.update);
router.delete('/:categoryId', controller.delete);

// export router
module.exports = router;
