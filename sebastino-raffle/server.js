import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import raffleRoutes from "./routes/raffleRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Sebastino Raffle API Running");
});

app.use("/api/raffle", raffleRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});