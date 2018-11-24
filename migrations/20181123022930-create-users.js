module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            first_name: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            last_name: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            email: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING,
            },
            password_hash: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            isActive: {
                defaultValue: true,
                type: Sequelize.BOOLEAN,
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
        return queryInterface.dropTable('users');
    }
};
