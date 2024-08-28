const prisma = require("../services/pirsmaClient");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authController = {
  signup: async (req, res, next) => {
    try {
      const { username, email, password, firstName, lastName } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await prisma.user.create({
        data: {
          username,
          email,
          passwordHash: hashedPassword,
          firstName,
          lastName,
          userRole: "User",
        },
      });

      const token = jwt.sign(
        { userId: user.id, role: user.userRole },
        process.env.JWT_SECRET
      );
      res.status(201).json({ token, user });
    } catch (error) {
      next(error);
    }
  },

  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await prisma.user.findUnique({ where: { email } });

      if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign(
        { userId: user.id, role: user.userRole },
        process.env.JWT_SECRET
      );
      res.json({ token, user });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = authController;
