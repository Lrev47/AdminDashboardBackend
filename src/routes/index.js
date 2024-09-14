const express = require("express");

const authRoutes = require("./auth-routes");

const userRoutes = require("./users-routes");

const themeRoutes = require("./themeRoutes");

const jobTrackerRoutes = require("./jobTrackerRoutes");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use the routes

app.use("/auth", authRoutes);

app.use("/jobTracker", jobTrackerRoutes);

app.use("/user", userRoutes);

app.use("/themes", themeRoutes);

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

module.exports = app;
