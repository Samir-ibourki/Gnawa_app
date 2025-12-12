import Artistes from "../models/Artistes.js";

export const artistsSeeder = async () => {
  await Artistes.bulkCreate([
    {
      name: "Maâlem Hamid El Kasri",
      description: "Legendary Gnawa Maâlem.",
      image: "img1.png",
      price: 200,
    },
    {
      name: "Maâlem Hassan Boussou",
      description: "Traditional Gnawa master.",
      image: "img2.png",
      price: 180,
    },
  ]);

  console.log("✅ Artists seeded");
};
