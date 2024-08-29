const db = require("../prismaClient"); // Assuming you use Prisma as an ORM

const notificationsService = {
  // Fetch all notifications
  getAllNotifications: async () => {
    return await db.notification.findMany();
  },

  // Fetch a specific notification by its ID
  getNotificationById: async (id) => {
    return await db.notification.findUnique({ where: { id } });
  },

  // Create a new notification
  createNotification: async (notificationData) => {
    const newNotification = await db.notification.create({
      data: notificationData,
    });
    return newNotification;
  },

  // Update an existing notification by its ID
  updateNotification: async (id, updateData) => {
    const updatedNotification = await db.notification.update({
      where: { id },
      data: updateData,
    });
    return updatedNotification;
  },

  // Delete a notification by its ID
  deleteNotification: async (id) => {
    await db.notification.delete({ where: { id } });
  },

  // Mark a notification as read
  markAsRead: async (id) => {
    await db.notification.update({
      where: { id },
      data: { isRead: true },
    });
  },

  // Mark a notification as unread
  markAsUnread: async (id) => {
    await db.notification.update({
      where: { id },
      data: { isRead: false },
    });
  },

  // Fetch available notification types (e.g., alert, reminder, etc.)
  getNotificationTypes: async () => {
    // Example: Fetch types from a predefined list or a database table
    return await db.notificationType.findMany();
  },
};

module.exports = notificationsService;
