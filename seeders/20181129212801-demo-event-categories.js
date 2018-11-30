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
            },
            {
                id: 2,
                name: 'Dance',
            },
            {
                id: 3,
                name: 'Fashion & Beauty',
            },
            {
                id: 4,
                name: 'Film',
            },
            {
                id: 5,
                name: 'Food & Drink',
            },
            {
                id: 6,
                name: 'Language & Culture',
            },
            {
                id: 7,
                name: 'Music',
            },
            {
                id: 8,
                name: 'Outdoors & Adventure',
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
