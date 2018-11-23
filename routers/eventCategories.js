const express = require('express');
const controller= require('../controllers/eventCategories');

// create router
const router = express.Router();

// set up routes
router.post('/', controller.create);
router.get('/:id', controller.read);
router.get('/', controller.readAll);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

// export router
module.exports = router;
