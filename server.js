import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";
import categoryRoutes from "./src/routes/categoryRoutes.js";
import cloudinaryRoutes from "./src/routes/cloudinaryRoutes.js";
import dashboardRoutes from "./src/routes/dashboardRoutes.js";
import expenseRoutes from "./src/routes/expenseRoutes.js";
import incomeRoutes from "./src/routes/incomeRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import sourceRoutes from "./src/routes/sourceRoutes.js";
import cookieParser from "cookie-parser";

const app = express();

const allowedOrigins = [
  process.env.CLIENT_URL,
  "https://svtracker.maddaathia.my.id",
  "http://localhost:5173",
].filter(Boolean).map((url) => url.replace(/\/$/, ""));

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      const cleanOrigin = origin.replace(/\/$/, "");
      if (allowedOrigins.includes(cleanOrigin) || allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error(`CORS blocked for origin: ${origin}`));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept", "X-Requested-With"],
  }),
);

app.use(express.json());
app.use(cookieParser());

connectDB();

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", uptime: process.uptime() });
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/cloudinary", cloudinaryRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);
app.use("/api/v1/expenses", expenseRoutes);
app.use("/api/v1/incomes", incomeRoutes);
app.use("/api/v1/sources", sourceRoutes);
app.use("/api/v1/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
