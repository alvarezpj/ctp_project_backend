module.exports = (sequelize, DataTypes) => {
    const event_categories = sequelize.define('event_categories', {
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
    }, { timestamps: false });

    event_categories.associate = (models) => {
        // associations can be defined here
        event_categories.hasMany(models.events, {
            foreignKey: 'category_id',
            sourceKey: 'id'
        });
    };

    return event_categories;
};
