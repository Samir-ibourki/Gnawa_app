import express from "express";
import {
  getAllArtistes,
  getArtistesById,
} from "../controllers/artistesController.js";

const router = express.Router();

router.get("/", getAllArtistes);
router.get("/:id", getArtistesById);

export default router;
