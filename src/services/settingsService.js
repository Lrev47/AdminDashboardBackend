const db = require("../prismaClient"); // Assuming you use Prisma as an ORM

const settingsService = {
  // Fetch all settings
  getAllSettings: async () => {
    return await db.setting.findMany();
  },

  // Fetch a specific setting by its ID
  getSettingById: async (id) => {
    return await db.setting.findUnique({ where: { id } });
  },

  // Create a new setting
  createSetting: async (settingData) => {
    const newSetting = await db.setting.create({
      data: settingData,
    });
    return newSetting;
  },

  // Update an existing setting by its ID
  updateSetting: async (id, updateData) => {
    const updatedSetting = await db.setting.update({
      where: { id },
      data: updateData,
    });
    return updatedSetting;
  },

  // Delete a setting by its ID
  deleteSetting: async (id) => {
    await db.setting.delete({ where: { id } });
  },

  // Fetch all categories for settings
  getCategories: async () => {
    return await db.category.findMany();
  },

  // Update a specific category by its ID
  updateCategory: async (id, updateData) => {
    const updatedCategory = await db.category.update({
      where: { id },
      data: updateData,
    });
    return updatedCategory;
  },

  // Fetch all preferences
  getPreferences: async () => {
    return await db.preference.findMany();
  },

  // Update preferences
  updatePreferences: async (updateData) => {
    // Assuming preferences are stored as a single entry, this can be customized as per your schema
    const updatedPreferences = await db.preference.updateMany({
      data: updateData,
    });
    return updatedPreferences;
  },

  // Fetch notification settings
  getNotificationSettings: async () => {
    return await db.notificationSetting.findMany();
  },

  // Update notification settings
  updateNotificationSettings: async (updateData) => {
    const updatedNotificationSettings = await db.notificationSetting.updateMany(
      {
        data: updateData,
      }
    );
    return updatedNotificationSettings;
  },

  // Reset settings to default values
  resetSettings: async () => {
    // Logic to reset settings, this could involve resetting all settings to their default values
    // This is a placeholder and should be tailored to your specific needs
    await db.setting.updateMany({
      data: { value: db.setting.defaultValue },
    });
  },
};

module.exports = settingsService;
