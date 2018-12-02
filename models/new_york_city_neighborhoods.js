module.exports = (sequelize, DataTypes) => {
    const new_york_city_neighborhoods = sequelize.define('new_york_city_neighborhoods', {
        name: {
            allowNull: false,
            type: DataTypes.STRING
        }
    }, { timestamps: false });

    new_york_city_neighborhoods.associate = function(models) {
        // associations can be defined here
        new_york_city_neighborhoods.hasMany(models.events, {
            foreignKey: 'neighborhood_id',
            sourceKey: 'id'
        })
    };

    return new_york_city_neighborhoods;
};
