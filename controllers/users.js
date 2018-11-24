const users = require('../models').users;


const userAttributes = ['id', 'first_name', 'last_name', 'email', 'password_hash', 'isActive'];

// implement basic CRUD functionality
const middlewares = {
    create(req, res, next) {
        return users
            .create(req.body, { fields: userAttributes })
            .then(user => res.status(201).send({
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email
            }));
    },
    read(req, res, next) {
        return users
            .findById(req.params.userId, { attributes: userAttributes.filter(attribute => attribute != 'password_hash') })
            .then(user => res.status(200).send(user));
    },
    update(req, res, next) {
        return users
            .update(
                req.body,
                { returning: true, where: { id: req.params.userId }})
            .then(([rowsUpdated, [updatedUser]]) => res.status(200).send({
                id: updatedUser.id,
                first_name: updatedUser.first_name,
                last_name: updatedUser.last_name,
                email: updatedUser.email,
                isActive: updatedUser.isActive
            }));
    },
};

// export middlewares
module.exports = middlewares;
