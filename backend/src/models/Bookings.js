import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import crypto from "crypto";

const Bookings = sequelize.define(
  "Bookings",
  {
    artistId: {
      type: DataTypes.INTEGER,
    },
    code: {
      type: DataTypes.STRING(12),
      unique: true,
      allowNull: false,
      defaultValue: () =>
        `GNA-${crypto.randomBytes(4).toString("hex").toUpperCase()}`,
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: { isEmail: true },
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    status: {
      type: DataTypes.STRING(50),
      defaultValue: "confirmed",
    },
    phone: DataTypes.STRING,
  },
  { timestamps: true }
);

export default Bookings;
