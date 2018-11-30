module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        first_name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        last_name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        email: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING,
        },
        password_hash: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        is_active: {
            defaultValue: true,
            type: DataTypes.BOOLEAN,
        }
    }, {});

    users.associate = function(models) {
        // associations can be defined here
    };

    return users;
};
