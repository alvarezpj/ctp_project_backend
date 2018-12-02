const events = require('../models').events;
const eventCategories = require('../models').event_categories;
const newYorkCityNeighborhoods = require('../models').new_york_city_neighborhoods;
const users = require('../models').users;
const { formatEvent } = require('./helpers');

// implement basic CRUD functionality
const middlewares = {
    // create an event
    create(req, res, next) {
        return events
            .create(req.body)
            .then(event => res.status(201).json(event));
    },
    // retrieve all events
    readAll(req, res, next) {
        return events
            .findAll({
                order: [['id', 'ASC']],
                include: [
                    { model: eventCategories },
                    { model: newYorkCityNeighborhoods },
                    { model: users, as: 'organizer' },
                    { model: users, as: 'attending' }
                ]
            })
            .then(events => {
                res.status(200).send(events.map(event => formatEvent(event)));
            });
    },
    // retrieve single event
    read(req, res, next) {
        return events
            .findById(
                req.params.eventId,
                {
                    include: [
                        { model: eventCategories },
                        { model: newYorkCityNeighborhoods },
                        { model: users, as: 'organizer' },
                        { model: users, as: 'attending' }
                    ]
                }
            )
            .then(event => res.status(200).json(formatEvent(event)));
    },
    // update single event
    update(req, res, next) {
        return events
            .update(
                req.body,
                {
                    returning: true,
                    where: { id: req.params.eventId }
                }
            )
            .then(([rowsUpdated, [updatedEvent]]) => {
                return events
                    .findById(
                        updatedEvent.id,
                        { include:
                            [
                                { model: eventCategories },
                                { model: newYorkCityNeighborhoods },
                                { model: users, as: 'organizer' },
                                { model: users, as: 'attending' }
                            ]
                        }
                    )
                    .then(event => res.status(200).json(formatEvent(event)))
            });
    },
    // delete single event
    delete(req, res, next) {
        return events
            .destroy({ where: { id: req.params.eventId }})
            .then(() => res.status(204).send());
    }
};

// export middlewares
module.exports = middlewares;
