const prisma = require("../services/pirsmaClient");

const adminController = {
  getAllUsers: async (req, res, next) => {
    try {
      const users = await prisma.user.findMany();
      res.json(users);
    } catch (error) {
      next(error);
    }
  },

  deleteUser: async (req, res, next) => {
    try {
      const { id } = req.params;
      await prisma.user.delete({ where: { id } });
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  },
};

module.exports = adminController;
