exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Bookings", [
      {
        artistId: 1,
        name: "John Doe",
        email: "john@example.com",
        quantity: 2,
        totalPrice: 400,
        confirmationCode: "ABC123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Bookings", null, {});
  },
};
