const notificationsService = require("../services/notificationsService");
const alertsService = require("../services/alertsService");

const notificationsController = {
  getAllNotifications: async (req, res, next) => {
    try {
      const notifications = await notificationsService.getAllNotifications();
      res.status(200).json(notifications);
    } catch (error) {
      next(error);
    }
  },

  getNotification: async (req, res, next) => {
    try {
      const notification = await notificationsService.getNotificationById(
        req.params.id
      );
      res.status(200).json(notification);
    } catch (error) {
      next(error);
    }
  },

  createNotification: async (req, res, next) => {
    try {
      const notification = await notificationsService.createNotification(
        req.body
      );
      res.status(201).json(notification);
    } catch (error) {
      next(error);
    }
  },

  updateNotification: async (req, res, next) => {
    try {
      const notification = await notificationsService.updateNotification(
        req.params.id,
        req.body
      );
      res.status(200).json(notification);
    } catch (error) {
      next(error);
    }
  },

  deleteNotification: async (req, res, next) => {
    try {
      await notificationsService.deleteNotification(req.params.id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },

  markAsRead: async (req, res, next) => {
    try {
      await notificationsService.markAsRead(req.params.id);
      res.status(200).json({ message: "Notification marked as read" });
    } catch (error) {
      next(error);
    }
  },

  markAsUnread: async (req, res, next) => {
    try {
      await notificationsService.markAsUnread(req.params.id);
      res.status(200).json({ message: "Notification marked as unread" });
    } catch (error) {
      next(error);
    }
  },

  getNotificationTypes: async (req, res, next) => {
    try {
      const types = await notificationsService.getNotificationTypes();
      res.status(200).json(types);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = notificationsController;
