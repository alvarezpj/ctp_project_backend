const eventCategories = require('../models').event_categories;
const events = require('../models').events;
const newYorkCityNeighborhoods = require('../models').new_york_city_neighborhoods;
const users = require('../models').users;
const { formatObject } = require('./helpers');

// implement basic CRUD functionality
const middlewares = {
    // create category
    create(req, res, next) {
        return eventCategories
            .create(req.body)
            .then(category => res.status(201).json(category));
    },
    // retrieve all categories
    readAll(req, res, next) {
        return eventCategories
            .findAll()
            .then(categories => res.status(200).send(categories));
    },
    // retrieve all events associated to a single category
    readAllEvents(req, res, next) {
        return eventCategories
            .findById(
                req.params.categoryId,
                {
                    include: [{
                        model: events, include: [
                            { model: eventCategories },
                            { model: newYorkCityNeighborhoods },
                            { model: users, as: 'organizer' },
                            { model: users, as: 'attending' }
                        ]
                    }]
                }
            )
            .then(category => res.status(200).json(formatObject(category)));
    },
    // retrieve single category
    read(req, res, next) {
        return eventCategories
            .findById(req.params.categoryId)
            .then(category => res.status(200).json(category));
    },
    // update single category
    update(req, res, next) {
        return eventCategories
            .update(
                req.body,
                {
                    returning: true,
                    where: { id: req.params.categoryId }
                }
            )
            .then(([rowsUpdated, [updatedCategory]]) => res.status(200).json(updatedCategory));
    },
    // delete single category
    delete(req, res, next) {
        return eventCategories
            .destroy({ where: { id: req.params.categoryId } })
            .then(() => res.status(204).send());
    }
};

// export middlewares
module.exports = middlewares;
