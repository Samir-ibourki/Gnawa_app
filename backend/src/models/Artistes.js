import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Artistes = sequelize.define(
  "Artistes",
  {
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    bio: {
      type: DataTypes.TEXT,
    },
    photo_url: {
      type: DataTypes.TEXT,
    },
    schedule: {
      type: DataTypes.JSONB,
    },
    country_or_origin: {
      type: DataTypes.STRING(100),
    },
  },
  {
    timestamps: true,
  }
);
export default Artistes;
