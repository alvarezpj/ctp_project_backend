const events = require('../models').events;


const eventAttributes = ['id', 'name', 'category', 'description', 'capacity',
    'attending', 'address', 'neighborhood', 'longitude', 'latitude', 'organizer',
    'event_time', 'event_date', 'duration'];

// implement basic CRUD functionality
const middlewares = {
    create(req, res, next) {
        return events
            .create(req.body, { fields: eventAttributes.filter(attribute => attribute != 'attending') })
            .then(event => res.status(201).send(event)); 
    },
    read(req, res, next) {
        return events
            .findById(req.params.eventId, { attributes: eventAttributes })
            .then(event => res.status(200).send(event));
    },
    readAll(req, res, next) {
        return events
            .findAll({ attributes: eventAttributes, order: [['id', 'ASC']] })
            .then(event => res.status(200).send(event));
    },
    update(req, res, next) {
        return events
            .update(
                req.body,
                { returning: true, where: { id: req.params.eventId }})
            .then(([rowsUpdated, [updatedEvent]]) => res.status(200).send(updatedEvent));
    },
    delete(req, res, next) {
        return events
            .destroy({ where: { id: req.params.eventId }})
            .then(() => res.status(204).send());
    }
};

// export middlewares
module.exports = middlewares;
