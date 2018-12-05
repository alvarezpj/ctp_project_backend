const newYorkCityNeighborhoods = require('../models').new_york_city_neighborhoods;
const events = require('../models').events;
const eventCategories = require('../models').event_categories;
const users = require('../models').users;
const { formatObject } = require('./helpers');


const middlewares = {
    // retrieve all neighborhoods
    readAll(req, res, next) {
        return newYorkCityNeighborhoods
            .findAll()
            .then(neighborhoods => res.status(200).send(neighborhoods));
    },
    // retrieve single neighborhood
    read(req, res, next) {
        return newYorkCityNeighborhoods
            .findAll({ where: { name: req.params.neighborhoodName } })
            .then(neighborhood => res.status(200).json(neighborhood));
    },
    // retrieve all events associated to a single neighborhood
    readAllEvents(req, res, next) {
        return newYorkCityNeighborhoods
            .findById(
                req.params.neighborhoodId,
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
            .then(neighborhood => res.status(200).json(formatObject(neighborhood)));
    }
};

// export middlewares
module.exports = middlewares;
