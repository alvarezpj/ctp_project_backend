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
        return queryInterface.bulkInsert('users_events', [
            {
                event_id: 1, 
                user_id: 1
            },
            {
                event_id: 1, 
                user_id: 2
            },
            {
                event_id: 1, 
                user_id: 3
            },
            {
                event_id: 1, 
                user_id: 4
            },
            {
                event_id: 3, 
                user_id: 3
            },
            {
                event_id: 3, 
                user_id: 4
            }
        ]);
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
        return queryInterface.bulkDelete('users_events', null, {});
    }
};
