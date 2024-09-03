const express = require("express");
const alertsRoutes = require("./alerts-routes");
const analyticsRoutes = require("./analytics-routes");
const authRoutes = require("./auth-routes");
const mockDataRoutes = require("./mock-data-routes");
const notificationsRoutes = require("./notifications-routes");
const permissionsRoutes = require("./permissions-routes");
const contentRoutes = require("./content-routes");
const dbQueryRoute = require("./db-queries-routes");
const environmentRoutes = require("./environment-routes");
const externalServicesRoutes = require("./external-services-routes");
const financeRoutes = require("./finance-routes");
const imageRoutes = require("./images-routes");
const projectRoutes = require("./project-routes");
const settingRoutes = require("./settings-routes");
const testandDebugRoutes = require("./testing-and-debugging-routes");
const userRoutes = require("./users-routes");
const versionControlRoutes = require("./version-control-routes");
const jobTrackerRoutes = require("./jobTrackerRoutes");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use the routes
app.use("/alerts", alertsRoutes);
app.use("/analytics", analyticsRoutes);
app.use("/auth", authRoutes);
app.use("/mock-data", mockDataRoutes);
app.use("/notifications", notificationsRoutes);
app.use("/applications", jobTrackerRoutes);
app.use("/permissions", permissionsRoutes);
app.use("/content", contentRoutes);
app.use("/dbQuery", dbQueryRoute);
app.use("/environment", environmentRoutes);
app.use("/externalServices", externalServicesRoutes);
app.use("/finance", financeRoutes);
app.use("/image", imageRoutes);
app.use("/project", projectRoutes);
app.use("/settings", settingRoutes);
app.use("/testandDebug", testandDebugRoutes);
app.use("/user", userRoutes);
app.use("/", versionControlRoutes);

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
