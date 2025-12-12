import { artistsSeeder } from "./artistsSeeder.js";
import { eventInfoSeeder } from "./eventInfoSeeder.js";
import { bookingsSeeder } from "./bookingsSeeder.js";
export const runSeeders = async () => {
  await artistsSeeder();
  await eventInfoSeeder();
  await bookingsSeeder();

  console.log("seeders finished");
};
