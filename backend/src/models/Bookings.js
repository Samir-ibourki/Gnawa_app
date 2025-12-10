import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Bookings = sequelize.define(
  "Bookings",
  {
    code: {
      type: DataTypes.STRING(12),
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    artist_ids: {
      type: DataTypes.JSONB,
    },
    status: {
      type: DataTypes.STRING(50),
      defaultValue: "confirmed",
    },
    phone: {
      type: DataTypes.STRING(50),
    },
  },
  {
    timestamps: true,
  }
);

export default Bookings;
