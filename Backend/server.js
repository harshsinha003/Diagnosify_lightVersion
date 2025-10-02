import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5173", "http://localhost:5174", "*"],
  credentials: true,
}));

const port = process.env.PORT || 3000;

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ message: "Simple Disease Prediction Backend - Health Check OK" });
});

// Optional: Proxy to Python API if needed
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Backend is running" });
});

app.listen(port, () => {
  console.log(`Simple backend running on port ${port}`);
});
