const app = require("./app");
const prisma = require("./prismaClient");
const alertsRoutes = require("./routes/alerts-routes");
const analyticsRoutes = require("./routes/analytics-routes");
const authRoutes = require("./routes/auth-routes");
const mockDataRoutes = require("./routes/mock-data-routes");
const notificationsRoutes = require("./routes/notifications-routes");
const permissionsRoutes = require("./routes/permissions-routes");
const contentRoutes = require("./routes/content-routes");
const dbQueryRoute = require("./routes/db-queries-routes");
const environmentRoutes = require("./routes/environment-routes");
const externalServicesRoutes = require("./routes/external-services-routes");
const financeRoutes = require("./routes/finance-routes");
const imageRoutes = require("./routes/images-routes");
const projectRoutes = require("./routes/project-routes");
const settingRoutes = require("./routes/settings-routes");
const testandDebugRoutes = require("./routes/testing-and-debugging-routes");
const userRoutes = require("./routes/users-routes");
const versionControlRoutes = require("./routes/version-control-routes");
const jobTrackerRoutes = require("./routes/jobTrackerRoutes");

// Mount all routes
app.use("/alerts", alertsRoutes);
app.use("/analytics", analyticsRoutes);
app.use("/auth", authRoutes);
app.use("/mock-data", mockDataRoutes);
app.use("/notifications", notificationsRoutes);
app.use("/permissions", permissionsRoutes);
app.use("/content", contentRoutes);
app.use("/db-queries", dbQueryRoute);
app.use("/environments", environmentRoutes);
app.use("/external-services", externalServicesRoutes);
app.use("/finance", financeRoutes);
app.use("/images", imageRoutes);
app.use("/projects", projectRoutes);
app.use("/settings", settingRoutes);
app.use("/testing-debugging", testandDebugRoutes);
app.use("/users", userRoutes);
app.use("/versions", versionControlRoutes);
app.use("/jobTracker", jobTrackerRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown of Prisma Client
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
