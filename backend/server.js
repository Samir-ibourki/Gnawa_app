import express from "express";
import sequelize from "./src/config/database.js";
import eventRoutes from "./src/routes/eventRoutes.js";
import bookingsRoutes from "./src/routes/bookingsRoutes.js";
import artistesRoutes from "./src/routes/artistesRoutes.js";
import { runSeeders } from "./src/seeders/index.js";
import cors from "cors";
const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());

import "./src/models/EventInfo.js";
import "./src/models/Bookings.js";
import "./src/models/Artistes.js";
import setupAssociations from "./src/config/associations.js";

app.use("/api/event", eventRoutes);
app.use("/api/artists", artistesRoutes);
app.use("/api/bookings", bookingsRoutes);

sequelize
  .sync({ alter: true })
  .then(async () => {
    setupAssociations();
    console.log("Database connecte !");

    const artistCount = await sequelize.models.Artistes.count();
    if (artistCount === 0) {
      console.log(`c'est premiere fois`);
      await runSeeders();
    } else {
      console.log("donnees deja presentes, seeders ignores");
    }

    app.listen(port, () => {
      console.log(`api gnawa tourne sur http://localhost:${port}`);
    });
  })
  .catch((err) => console.error("Erreur DB:", err));
