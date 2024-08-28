const settingsService = require("../services/settingsService");

const settingsController = {
  getAllSettings: async (req, res, next) => {
    try {
      const settings = await settingsService.getAllSettings();
      res.status(200).json(settings);
    } catch (error) {
      next(error);
    }
  },

  getSetting: async (req, res, next) => {
    try {
      const setting = await settingsService.getSettingById(req.params.id);
      res.status(200).json(setting);
    } catch (error) {
      next(error);
    }
  },

  createSetting: async (req, res, next) => {
    try {
      const setting = await settingsService.createSetting(req.body);
      res.status(201).json(setting);
    } catch (error) {
      next(error);
    }
  },

  updateSetting: async (req, res, next) => {
    try {
      const setting = await settingsService.updateSetting(
        req.params.id,
        req.body
      );
      res.status(200).json(setting);
    } catch (error) {
      next(error);
    }
  },

  deleteSetting: async (req, res, next) => {
    try {
      await settingsService.deleteSetting(req.params.id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },

  getCategories: async (req, res, next) => {
    try {
      const categories = await settingsService.getCategories();
      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  },

  updateCategory: async (req, res, next) => {
    try {
      const category = await settingsService.updateCategory(
        req.params.id,
        req.body
      );
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  },

  getPreferences: async (req, res, next) => {
    try {
      const preferences = await settingsService.getPreferences();
      res.status(200).json(preferences);
    } catch (error) {
      next(error);
    }
  },

  updatePreferences: async (req, res, next) => {
    try {
      const preferences = await settingsService.updatePreferences(req.body);
      res.status(200).json(preferences);
    } catch (error) {
      next(error);
    }
  },

  getNotificationSettings: async (req, res, next) => {
    try {
      const notificationSettings =
        await settingsService.getNotificationSettings();
      res.status(200).json(notificationSettings);
    } catch (error) {
      next(error);
    }
  },

  updateNotificationSettings: async (req, res, next) => {
    try {
      const notificationSettings =
        await settingsService.updateNotificationSettings(req.body);
      res.status(200).json(notificationSettings);
    } catch (error) {
      next(error);
    }
  },

  resetSettings: async (req, res, next) => {
    try {
      await settingsService.resetSettings();
      res.status(200).json({ message: "Settings reset successfully" });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = settingsController;
