import Artistes from "../models/Artistes.js";
import Bookings from "../models/Bookings.js";

const setupAssociations = () => {
  Bookings.belongsTo(Artistes, {
    foreignKey: "artistId",
    as: "artist",
  });
  Artistes.hasMany(Bookings, { as: "bookings", foreignKey: "artistId" });
  console.log("Associations définies sans erreur !");
};

export default setupAssociations;
