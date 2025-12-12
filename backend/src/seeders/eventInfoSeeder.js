import EventInfo from "../models/EventInfo.js";
export const eventInfoSeeder = async () => {
  await EventInfo.bulkCreate([
    {
      title: "Gnawa Festival 2025",
      description: "International Gnawa music festival in Essaouira.",
      date: "2025-08-15",
      venue: "Essaouira",
      image: "img3.png",
    },
  ]);

  console.log("✅ Events seeded");
};
