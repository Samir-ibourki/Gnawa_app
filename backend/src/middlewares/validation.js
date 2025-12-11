export const validateEmail = (req, res, next) => {
  const { email } = req.params;
  if (!email || !email.includes("@")) {
    return res.status(400).json({ message: "Wrong Email" });
  }
  next();
};
