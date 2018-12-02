module.exports = (sequelize, DataTypes) => {
    const users_events = sequelize.define('users_events', {
        event_id: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        user_id: {
            allowNull: false,
            type: DataTypes.INTEGER
        }
    }, { timestamps: false });

    users_events.associate = function(models) {
        // associations can be defined here
    };

    return users_events;
};
