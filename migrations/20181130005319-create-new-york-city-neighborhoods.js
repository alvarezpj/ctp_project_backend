module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('neighborhoods', {
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
        return queryInterface.dropTable('neighborhoods');
    }
};
