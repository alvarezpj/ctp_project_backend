module.exports = (sequelize, DataTypes) => {
    const events = sequelize.define('events', {
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        category_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        description: {
            defaultValue: 'Description Not Provided',
            type: DataTypes.TEXT,
        },
        capacity: {
            type: DataTypes.INTEGER,
        },
        address: {
            allowNull: false,
            notEmpty: true,
            type: DataTypes.STRING,
        },
        neighborhood_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        latitude: {
            allowNull: false,
            type: DataTypes.FLOAT,
        },
        longitude: {
            allowNull: false,
            type: DataTypes.FLOAT,
        },
        organizer_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        date_time: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        duration: {
            type: DataTypes.INTEGER,
        }
    }, { timestamps: false });

    events.associate = models => {
        // associations can be defined here
        events.belongsTo(models.event_categories, { foreignKey: 'category_id' });
        events.belongsTo(models.new_york_city_neighborhoods, { foreignKey: 'neighborhood_id' });
        events.belongsTo(models.users, { as: 'organizer', foreignKey: 'organizer_id' });
        events.belongsToMany(models.users, {
            as: 'attending',
            through: models.users_events,
            foreignKey: 'event_id',
            otherKey: 'user_id'
        });
    };

    return events;
};
