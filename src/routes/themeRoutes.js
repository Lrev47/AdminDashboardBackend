const express = require("express");
const router = express.Router();
const { createTheme, getThemes, deleteTheme } = require("../Controllers/theme");

// Route to create a theme
router.post("/", createTheme);

// Route to get all themes
router.get("/", getThemes);

//delete theme
router.delete("/:id", deleteTheme);

module.exports = router;
