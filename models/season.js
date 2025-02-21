import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Season = sequelize.define(
  "Season",
  {
    season_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: "seasons" }
);

export default Season;
