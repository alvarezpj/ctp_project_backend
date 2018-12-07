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
        return queryInterface.bulkInsert('events', [
            {
                name: 'Williamsburg French Language Group',
                category_id: 6,
                description: 'Finally, a French language meetup in Brooklyn ! Join us for conversation -- we meet once or twice per month in and near Williamsburg to speak the language we love. All levels are welcome. Come -- speak French, meet new friends, and have a good time -- in Williamsburg !',
                capacity: 50,
                address: '351 Broadway',
                neighborhood_id: 152,
                latitude: 40.7081156,
                longitude: -73.9570696,
                organizer_id: 1,
                date_time: Sequelize.fn('NOW'),
                duration: 120
            },
            {
                name: 'Queens Chinese and English Language Exchange Meetup',
                category_id: 6,
                description: '[DIRECTIONS]: Grand Ave - Newtown [M, R] Walk down Broadway in the opposite direction of Queens Blvd. and make a right on Justice Ave.',
                capacity: 30,
                address: '86-12 Justice Ave',
                neighborhood_id: 74,
                latitude: 40.7379750,
                longitude: -73.8801301,
                organizer_id: 4,
                date_time: Sequelize.fn('NOW'),
                duration: 240
            },
            {
                name: 'Bad Movie Night NYC',
                category_id: 4,
                description: '"Happy holidays". Blank red cups at Starbucks. Stockings full of Sharia law. Christ is nearly gone from Christmas, and who\'s to blame? Nancy Pelosi? The gay agenda? Yes, of course, but also... SATAN! This evening we will watch two educational films and learn about how the prince of lies threatens mankind.',
                capacity: 20,
                address: '30-33 32nd St',
                neighborhood_id: 62,
                latitude: 40.7643574,
                longitude: -73.9234619,
                organizer_id: 3,
                date_time: Sequelize.fn('NOW'),
                duration: 120
            },
            {
                name: 'Just Juice',
                category_id: 5,
                description: 'Bring your good vibes and great energy to this indoor outdoor Juice haven on a Friday night and let us know why you juice! This is a meet and greet for like minded juicers that want to talk about their juicing experiences, share recipes and discuss the health benefits of the culture.',
                capacity: 30,
                address: '97-16 101st Ave',
                neighborhood_id: 97,
                latitude: 40.6794072,
                longitude: -73.8507279,
                organizer_id: 2,
                date_time: Sequelize.fn('NOW'),
                duration: 100
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
        return queryInterface.bulkDelete('events', null, {});
    }
};
