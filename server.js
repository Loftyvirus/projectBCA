import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import authRoutes from "./routes/authroute.js";
import publicRoutes from "./routes/publicroute.js";
import adminRoutes from "./routes/adminroute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/public", publicRoutes);
app.use("/api/admin", adminRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
