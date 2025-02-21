import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Supreme from "../models/Supreme.js";


// export const registerSupreme = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const existingUser = await Supreme.findOne({ where: { email } });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists." });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newSupremeUser = await Supreme.create({
//       email,
//       password: hashedPassword,
//     });

//     res.status(201).json({ message: "Supreme user registered successfully", user: newSupremeUser });
//   } catch (error) {
//     res.status(500).json({ message: "Internal Server Error", error });
//   }
// };

// authenticateSupreme function is used to authenticate the user by comparing the email and password with the database.
export const authenticateSupreme = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Supreme.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ message: "Authenticated successfully", token });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};
