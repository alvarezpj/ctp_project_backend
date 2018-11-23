const eventCategories = require('../models').event_categories;

// implement basic CRUD functionality
const middlewares = {
    create(req, res, next) {
        return eventCategories
            .create({ name: req.body.name })
            .then(category => res.status(201).send({ 
                id: category.id,
                name: category.name 
            }));
    },
    read(req, res, next) {
        return eventCategories
            .findById(req.params.id, { attributes: ['id', 'name'] })
            .then(category => res.status(200).send(category));
    },
    readAll(req, res, next) {
        return eventCategories
            .findAll({ attributes: ['id', 'name'], order: [['id', 'ASC']] })
            .then(category => res.status(200).send(category));
    },
    update(req, res, next) {
        return eventCategories
            .update(
                { name: req.body.name },
                { returning: true, where: { id: req.params.id }})
            .then(([rowsUpdated, [updatedCategory]]) => res.status(200).send({
                id: updatedCategory.id,
                name: updatedCategory.name
            }));
    },
    delete(req, res, next) {
        return eventCategories
            .destroy({ where: { id: req.params.id }})
            .then(() => res.status(204).send());
    }
};

// export middlewares
module.exports = middlewares;
