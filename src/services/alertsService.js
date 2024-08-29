const db = require("../prismaClient"); // Assuming you use Prisma as an ORM
const { v4: uuidv4 } = require("uuid");

const alertsService = {
  // Fetch all alerts from the database
  getAllAlerts: async () => {
    return await db.alert.findMany();
  },

  // Fetch a single alert by its ID
  getAlertById: async (id) => {
    return await db.alert.findUnique({ where: { id } });
  },

  // Create a new alert
  createAlert: async (alertData) => {
    const newAlert = {
      id: uuidv4(),
      ...alertData,
      createdAt: new Date(),
      resolved: false,
    };
    return await db.alert.create({ data: newAlert });
  },

  // Update an existing alert by its ID
  updateAlert: async (id, updateData) => {
    return await db.alert.update({
      where: { id },
      data: updateData,
    });
  },

  // Delete an alert by its ID
  deleteAlert: async (id) => {
    await db.alert.delete({ where: { id } });
  },

  // Resolve an alert by marking it as resolved
  resolveAlert: async (id) => {
    return await db.alert.update({
      where: { id },
      data: { resolved: true },
    });
  },

  // Fetch all active (unresolved) alerts
  getActiveAlerts: async () => {
    return await db.alert.findMany({ where: { resolved: false } });
  },

  // Bulk resolve multiple alerts by their IDs
  bulkResolveAlerts: async (alertIds) => {
    return await db.alert.updateMany({
      where: { id: { in: alertIds } },
      data: { resolved: true },
    });
  },
};

module.exports = alertsService;
