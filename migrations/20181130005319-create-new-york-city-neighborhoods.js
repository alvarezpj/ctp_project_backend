module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('new_york_city_neighborhoods', {
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
        return queryInterface.dropTable('new_york_city_neighborhoods');
    }
};
