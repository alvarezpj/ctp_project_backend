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
        return queryInterface.bulkInsert('users', [
            {
                first_name: 'Victor',
                last_name: 'Alvarez Pajaro',
                email: 'vicalpa76@protonmail.com',
                password_hash: 'suchasimplepassword',
            },
            {
                first_name: 'Rohan',
                last_name: 'Swaby',
                email: 'ruenesto@yahoo.com',
                password_hash: 'arsenalbestteaminengland',
            },
            {
                first_name: 'Lenny',
                last_name: 'Gonzalez',
                email: 'dopelenny@hotmail.com',
                password_hash: 'moremexicanthanmeimpossible',
            },
            {
                first_name: 'Norbu',
                last_name: 'Tsering',
                email: 'ntsering@gmail.com',
                password_hash: 'iloveseattle',
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
        return queryInterface.bulkDelete('users', null, {});
    }
};
