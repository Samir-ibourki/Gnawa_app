import express from "express";
import sequelize from "./src/config/database.js";
import eventRoutes from "./src/routes/eventRoutes.js";
import bookingsRoutes from "./src/routes/bookingsRoutes.js";
import artistesRoutes from "./src/routes/artistesRoutes.js";

const port = 3000;
const app = express();
app.use(express.json());

import "./src/models/EventInfo.js";
import "./src/models/Bookings.js";
import "./src/models/Artistes.js";

app.use("/api/event", eventRoutes);
app.use("/api/artists", artistesRoutes);
app.use("/api/bookings", bookingsRoutes);

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
