module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('event_categories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('event_categories');
    }
};
