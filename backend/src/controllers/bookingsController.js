import Artistes from "../models/Artistes.js";
import Bookings from "../models/Bookings.js";
import EventInfo from "../models/EventInfo.js";
export const createBooking = async (req, res) => {
  try {
    const { name, email, ticketsCount } = req.body;
    if (!name || !email || !ticketsCount) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    const booking = await Bookings.create({
      name,
      email,
      ticketsCount,
      code,
    });
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getBookingByCode = async (req, res) => {
  try {
    const booking = await Bookings.findOne({
      where: { code: req.params.code },
    });
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getBookingsByEmail = async (req, res) => {
  try {
    const { email } = req.params;

    if (!email) {
      return res.status(400).json({ message: "Email manquant." });
    }

    const bookings = await Bookings.findAll({
      where: { email },
      include: [
        { model: Artistes, as: "artist" },
        { model: EventInfo, as: "event" },
      ],
    });

    if (bookings.length === 0) {
      return res
        .status(404)
        .json({ message: "Aucune réservation trouvée pour cet email." });
    }

    return res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching reservations by email:", error);
    return res.status(500).json({ message: "Erreur interne du serveur." });
  }
};
