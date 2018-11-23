'use strict';
module.exports = (sequelize, DataTypes) => {
    const users_events = sequelize.define('users_events', {
        user_id: DataTypes.INTEGER,
        event_id: DataTypes.INTEGER
    }, {});
    
    users_events.associate = function(models) {
        // associations can be defined here
    };

    return users_events;
};