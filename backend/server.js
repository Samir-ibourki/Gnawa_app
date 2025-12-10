import express from "express";
import sequelize from "./src/config/database.js";
const port = 3000;
const app = express();
app.use(express.json());

import "./src/models/EventInfo.js";

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("databased synced successfully !");
  })
  .catch((err) => {
    console.log("Error databased", err);
  });

app.listen(port, () => {
  console.log(`server running in ${port}`);
});
