module.exports = (sequelize, DataTypes) => {
    const events = sequelize.define('events', {
        id: {
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            type: DataTypes.UUID,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        category: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        description: {
            defaultValue: 'Description Not Provided',
            type: DataTypes.TEXT,
        },
        capacity: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        attending: {
            defaultValue: 0,
            type: DataTypes.INTEGER,
        },
        address: {
            allowNull: false,
            notEmpty: true,
            type: DataTypes.STRING,
        },
        neighborhood: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        longitude: {
            allowNull: false,
            type: DataTypes.FLOAT,
        },
        latitude: {
            allowNull: false,
            type: DataTypes.FLOAT,
        },
        organizer: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        event_time: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        event_date: {
            allowNull: false,
            type: DataTypes.DATEONLY,
        },
        duration: {
            allowNull: false,
            type: DataTypes.INTEGER,
        }
    }, {});

    events.associate = models => {
        // associations can be defined here
    };

    return events;
};
