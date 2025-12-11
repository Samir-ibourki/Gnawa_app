import express from "express";
import {
  getBookingByCode,
  createBooking,
  getBookingsByEmail,
} from "../controllers/bookingsController.js";
import { validateEmail } from "../middlewares/validation.js";
const router = express.Router();

router.get("/email/:email", validateEmail, getBookingsByEmail);
router.get("/:code", getBookingByCode);
router.post("/", createBooking);

export default router;
