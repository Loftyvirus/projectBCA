import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); 

const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER,
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST, 
    port: process.env.DB_PORT, 
    dialect: "mysql",
    logging: false,
  }
);

sequelize
  .authenticate()
  .then(() =>
    console.log("Connection to the database has been established successfully.")
  )
  .catch((error) => console.error("Unable to connect to the database:", error));

export default sequelize; 