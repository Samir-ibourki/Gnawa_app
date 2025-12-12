exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Events", [
      {
        title: "Gnawa Festival 2025",
        description: "International Gnawa music festival in Essaouira.",
        date: "2025-08-15",
        location: "Essaouira",
        image: "https://example.com/event.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Events", null, {});
  },
};
