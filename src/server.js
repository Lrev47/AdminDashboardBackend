const app = require("./app");
const prisma = require("./services/pirsmaClient");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown of Prisma Client
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
