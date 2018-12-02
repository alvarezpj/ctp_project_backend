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
            { name: 'Arts' },
            { name: 'Dance' },
            { name: 'Fashion & Beauty' },
            { name: 'Film' },
            { name: 'Food & Drink' },
            { name: 'Language & Culture' },
            { name: 'Music' },
            { name: 'Outdoors & Adventure' }
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
