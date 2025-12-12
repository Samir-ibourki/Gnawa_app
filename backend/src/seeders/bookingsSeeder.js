import Bookings from "../models/Bookings.js";

export const bookingsSeeder = async () => {
  await Bookings.bulkCreate([
    {
      code: "ABC123",
      name: "John Doe",
      email: "john@gmail.com",
      qty: 2,
      artist_ids: [1],
      status: "confirmed",
      phone: "+212612345678",
    },
  ]);

  console.log("✅ Bookings seeded");
};
