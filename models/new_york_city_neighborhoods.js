module.exports = (sequelize, DataTypes) => {
    const neighborhoods = sequelize.define('neighborhoods', {
        name: {
            allowNull: false,
            type: DataTypes.STRING
        }
    }, {});

    neighborhoods.associate = function(models) {
        // associations can be defined here
    };

    return neighborhoods;
};
