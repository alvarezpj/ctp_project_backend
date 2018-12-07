module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('events', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            category_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            description: {
                defaultValue: 'Description Not Provided',
                type: Sequelize.TEXT,
            },
            capacity: {
                type: Sequelize.INTEGER,
            },
            address: {
                allowNull: false,
                notEmpty: true,
                type: Sequelize.STRING,
            },
            neighborhood_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            latitude: {
                allowNull: false,
                type: Sequelize.FLOAT,
            },
            longitude: {
                allowNull: false,
                type: Sequelize.FLOAT,
            },
            organizer_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            date_time: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            duration: {
                type: Sequelize.INTEGER,
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('events');
    }
};
