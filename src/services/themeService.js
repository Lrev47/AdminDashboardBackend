const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createTheme = async (themeData) => {
  return await prisma.theme.create({
    data: {
      name: themeData.name,
      mode: themeData.mode,
      primary: themeData.primary,
      primaryLight: themeData.primaryLight,
      greyMain: themeData.greyMain,
      greyLight: themeData.greyLight,
      greyDark: themeData.greyDark,
      greenAccent: themeData.greenAccent,
      redAccent: themeData.redAccent,
      blueAccent: themeData.blueAccent,
      background: themeData.background,
      text: themeData.text,
    },
  });
};

const getAllThemes = async () => {
  return await prisma.theme.findMany();
};

module.exports = { createTheme, getAllThemes };
