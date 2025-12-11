import Bookings from "../models/Bookings.js";
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
