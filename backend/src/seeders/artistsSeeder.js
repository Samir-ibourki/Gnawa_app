exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Artists", [
      {
        name: "Maâlem Hamid El Kasri",
        description: "Legendary Gnawa Maâlem.",
        image: require("../../../frontend/assets/img1.png"),
        price: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Maâlem Hassan Boussou",
        description: "Traditional Gnawa master.",
        image: require("../../../frontend/assets/img2.png"),
        price: 180,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Artists", null, {});
  },
};
