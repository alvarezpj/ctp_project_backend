module.exports = (sequelize, DataTypes) => {

    const event_categories = sequelize.define('event_categories', {
        name: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false
            }
        },
    }, {});

    event_categories.associate = (models) => {
        // associations can be defined here
    };

    return event_categories;
};
