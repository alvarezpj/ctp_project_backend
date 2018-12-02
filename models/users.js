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
    }, { timestamps: false });

    users.associate = function(models) {
        // associations can be defined here
        users.belongsToMany(models.events, {
            through: models.users_events,
            foreignKey: 'user_id',
            otherKey: 'event_id'
        });
    };

    return users;
};
