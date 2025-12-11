import EventInfo from "../models/EventInfo.js";

export const getEventInfo = async (req, res) => {
  try {
    const event = await EventInfo.findOne();
    if (!event) {
      return res.status(400).json({ message: "Event nout found" });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
