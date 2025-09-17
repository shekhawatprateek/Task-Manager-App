import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

// register 
export const registerUser = async (req, res) => {
  try {
    // console.log(req.body)
    const { email, password } = req.body;

  
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const user = new User({ email, password });
    await user.save();


    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Login 
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;


    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }


    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    // console.log(token,"line 40")

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
