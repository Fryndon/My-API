require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const questRoutes = require("./routes/quests");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Маршруты
app.use("/api/quests", questRoutes);

// Подключение к MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
