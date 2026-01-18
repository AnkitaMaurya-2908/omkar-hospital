import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });

  if (!admin || !(await admin.matchPassword(password))) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign(
    { id: admin._id },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({
    success: true,
    token,
  });
};
