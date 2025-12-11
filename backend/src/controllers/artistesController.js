import Artistes from "../models/Artistes.js";

export const getAllArtistes = async (req, res) => {
  try {
    const artistes = await Artistes.findAll();
    res.json(artistes);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
export const getArtistesById = async (req, res) => {
  try {
    const artist = await Artistes.findByPk(req.params.id);
    if (!artist) {
      return res.status(404).json({ message: "Artist not found" });
    }
    res.json(artist);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
