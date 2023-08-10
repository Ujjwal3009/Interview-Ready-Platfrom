import express from "express";
import dotenv from "dotenv";
import dbInstance from "./config/db.js";
import userRoutes from "./routes/uerRoutes.js";
import Admin from "./models/admin.js";
import User from "./models/userModel.js";
import generateToken from "./utils/generateToken.js";
import cors from "cors";
import morgan from "morgan";
dotenv.config();

dbInstance.connect();

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Hello Admin" });
});
const PORT = 3000;

app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`));
