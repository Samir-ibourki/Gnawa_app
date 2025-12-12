import Artistes from "../models/Artistes.js";
import EventInfo from "../models/EventInfo.js";
import Bookings from "../models/Bookings.js";

export const runSeeders = async () => {
  try {
    //event Info
    const eventCount = await EventInfo.count();
    if (eventCount === 0) {
      await EventInfo.create({
        title: "La Grande Soirée Gnawa",
        description:
          "Une nuit mystique célébrant le patrimoine Gnawa avec les plus grands Maâlems du Maroc",
        date: "2025-08-24T20:00:00Z",
        venue: "Agadir, Maroc",
        banner_url: "img5.png",
      });
      console.log("Event cree");
    }

    //artistes
    const artistesCount = await Artistes.count();
    if (artistesCount === 0) {
      await Artistes.bulkCreate([
        {
          name: "Maâlem Hamid",
          bio: "Le maître incontesté du Guembri, originaire d'Essaouira. Plus de 40 ans de tradition pure.",
          photo_url: "https://i.imgur.com/hamid-big.jpg",
          schedule: { start: "21:00", end: "22:30" },
          country_or_origin: "Maroc",
        },
        {
          name: "Group Sud Fusion",
          bio: "Fusion explosive entre Gnawa traditionnel et jazz moderne.",
          photo_url: "img4.png",
          schedule: { start: "22:45", end: "00:00" },
          country_or_origin: "Maroc",
        },
        {
          name: "Troup Agadir",
          bio: "Ouverture traditionnelle avec les danses et rythmes du Souss.",
          photo_url: "img3.png",
          schedule: { start: "20:00", end: "20:45" },
          country_or_origin: "Maroc",
        },
      ]);
      console.log("3 artistes ajoutes");
    }

    //billet
    const bookingCount = await Bookings.count();
    if (bookingCount === 0) {
      await Bookings.create({
        name: "samir ibourki",
        email: "samir@example.com",
        qty: 2,
        code: "GNA-TEST123",
      });
      console.log("Billet test cree , code: GNA-TEST123");
    }

    console.log("seeders termines !");
  } catch (error) {
    console.error("Erreur dans les seeders :", error.message);
  }
};
