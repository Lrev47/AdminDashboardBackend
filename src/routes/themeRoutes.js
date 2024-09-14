const express = require("express");
const router = express.Router();
const { createTheme, getThemes } = require("../Controllers/theme");

// Route to create a theme
router.post("/", createTheme);

// Route to get all themes
router.get("/", getThemes);

module.exports = router;
