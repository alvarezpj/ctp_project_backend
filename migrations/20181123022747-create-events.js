module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('events', {
            id: {
                allowNull: false,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4,
                type: Sequelize.UUID,
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            category: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            description: {
                defaultValue: 'Description Not Provided',
                type: Sequelize.TEXT,
            },
            capacity: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            attending: {
                defaultValue: 0,
                type: Sequelize.INTEGER,
            },
            address: {
                allowNull: false,
                notEmpty: true,
                type: Sequelize.STRING,
            },
            neighborhood: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            longitude: {
                allowNull: false,
                type: Sequelize.FLOAT,
            },
            latitude: {
                allowNull: false,
                type: Sequelize.FLOAT,
            },
            organizer: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            event_time: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            event_date: {
                allowNull: false,
                type: Sequelize.DATEONLY,
            },
            duration: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('events');
    }
};
