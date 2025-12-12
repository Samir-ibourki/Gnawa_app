import Artistes from "../models/Artistes.js";
import Bookings from "../models/Bookings.js";
import EventInfo from "../models/EventInfo.js";

const setupAssociations = () => {
  Bookings.belongsToMany(Artistes, {
    through: "Booking_Artistes",
    as: "artists",
    foreignKey: "bookingId",
  });
  Artistes.belongsToMany(Bookings, {
    through: "Booking_Artistes",
    as: "bookings",
    foreignKey: "artistId",
  });

  Bookings.belongsTo(EventInfo, { as: "event", foreignKey: "eventId" });
  EventInfo.hasMany(Bookings, { as: "bookings", foreignKey: "eventId" });

  console.log("Associations définies sans erreur !");
};

export default setupAssociations;
