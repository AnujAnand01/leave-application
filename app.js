require("dotenv").config(); // Load .env

const express = require("express");
const mongoose = require("mongoose");
const leaveRoutes = require("./routes/leaveRoutes");
const path = require("path");
const app = express();

// Use values from .env
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("views"));

app.use("/api", leaveRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
