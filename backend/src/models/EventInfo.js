import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const EventInfo = sequelize.define(
  "EventInfo",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    venue: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    banner_url: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true,
  }
);
export default EventInfo;
