const app = require("./app");
const prisma = require("./prismaClient");

const authRoutes = require("./routes/auth-routes");

const userRoutes = require("./routes/users-routes");

const jobTrackerRoutes = require("./routes/jobTrackerRoutes");

const themeRoutes = require("./routes/themeRoutes");

// Mount all routes

app.use("/auth", authRoutes);

app.use("/users", userRoutes);

app.use("/themes", themeRoutes);

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
