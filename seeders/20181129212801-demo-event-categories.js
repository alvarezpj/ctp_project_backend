module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('People', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */
        return queryInterface.bulkInsert('event_categories', [
            {
                id: 1,
                name: 'Arts',
                created_at: Sequelize.fn('NOW'),
                updated_at: Sequelize.fn('NOW')
            },
            {
                id: 2,
                name: 'Dance',
                created_at: Sequelize.fn('NOW'), 
                updated_at: Sequelize.fn('NOW') 
            },
            {
                id: 3,
                name: 'Fashion & Beauty',
                created_at: Sequelize.fn('NOW'),
                updated_at: Sequelize.fn('NOW')
            },
            {
                id: 4,
                name: 'Film',
                created_at: Sequelize.fn('NOW'),
                updated_at: Sequelize.fn('NOW')
            },
            {
                id: 5,
                name: 'Food & Drink',
                created_at: Sequelize.fn('NOW'),
                updated_at: Sequelize.fn('NOW')
            },
            {
                id: 6,
                name: 'Language & Culture',
                created_at: Sequelize.fn('NOW'),
                updated_at: Sequelize.fn('NOW')
            },
            {
                id: 7,
                name: 'Music',
                created_at: Sequelize.fn('NOW'),
                updated_at: Sequelize.fn('NOW')
            },
            {
                id: 8,
                name: 'Outdoors & Adventure',
                created_at: Sequelize.fn('NOW'),
                updated_at: Sequelize.fn('NOW')
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
       return queryInterface.bulkDelete('event_categories', null, {});
    }
};
