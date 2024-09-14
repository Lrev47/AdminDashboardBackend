const themeService = require("../services/themeService");

const createTheme = async (req, res) => {
  try {
    const themeData = req.body;
    const newTheme = await themeService.createTheme(themeData);
    res.status(201).json(newTheme);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getThemes = async (req, res) => {
  try {
    const themes = await themeService.getAllThemes();
    res.status(200).json(themes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createTheme, getThemes };
