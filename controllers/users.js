const users = require('../models').users;
const events = require('../models').events;
const usersEvents = require('../models').users_events;
const eventCategories = require('../models').event_categories;
const newYorkCityNeighborhoods = require('../models').new_york_city_neighborhoods;
const { formatUser } = require('./helpers');
const { formatUserWithEvents } = require('./helpers');


const middlewares = {
    // create an user
    create(req, res, next) {
        return users
            .create(req.body)
            .then(user => res.status(201).json(formatUser(user)));
    },
    // create an user-event association in users_events join table
    joinEvent(req, res, next) {
        return usersEvents
            .create({
                event_id: req.params.eventId,
                user_id: req.params.userId
            })
            .then(userEvent => res.status(201).json(userEvent));
    },
    // retrieve all events associated to a user
    readAllEvents(req, res, next) {
        return users
            .findById(
                req.params.userId,
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
            .then(user => res.status(200).json(formatUserWithEvents(user)));
    },
    // retrieve single user
    read(req, res, next) {
        return users
            .findById(req.params.userId)
            .then(user => res.status(200).json(formatUser(user)));
    },
    // update single user
    update(req, res, next) {
        return users
            .update(
                req.body,
                {
                    returning: true,
                    where: { id: req.params.userId }
                }
            )
            .then(([rowsUpdated, [updatedUser]]) => res.status(200).json(formatUser(updatedUser)));
    },
};

// export middlewares
module.exports = middlewares;
