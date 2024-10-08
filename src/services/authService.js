const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../prismaClient"); // Assuming you use Prisma as an ORM

const authService = {
  // Hash a password using bcrypt
  hashPassword: (password) => bcrypt.hash(password, 10),

  // Verify a password against a hashed password
  verifyPassword: (password, hashedPassword) =>
    bcrypt.compare(password, hashedPassword),

  // Generate a JWT token with user ID and role
  generateToken: (userId, role) =>
    jwt.sign({ userId, role }, process.env.JWT_SECRET, { expiresIn: "1d" }),

  // Register a new user
  registerUser: async (userData) => {
    const hashedPassword = await authService.hashPassword(userData.password);
    const user = await db.user.create({
      data: {
        ...userData,
        passwordHash: hashedPassword, // Correct field name for hashed password
        password: undefined, // Remove the plain password to prevent it from being saved
      },
    });
    return user;
  },

  // Login a user by verifying their credentials and generating a token
  loginUser: async ({ username, password }) => {
    const user = await db.user.findUnique({ where: { username } });
    if (
      !user ||
      !(await authService.verifyPassword(password, user.passwordHash))
    ) {
      throw new Error("Invalid credentials");
    }
    const token = authService.generateToken(user.id, user.role);
    return { token, user };
  },

  // Logout logic (e.g., token invalidation, if required)
  logoutUser: async (token) => {
    // Implementation depends on how you manage sessions/tokens
  },

  // Refresh a JWT token
  refreshToken: async (refreshToken) => {
    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
    const newToken = authService.generateToken(decoded.userId, decoded.role);
    return newToken;
  },

  // Handle forgot password by sending a reset email (implementation depends on your email setup)
  forgotPassword: async (email) => {
    const user = await db.user.findUnique({ where: { email } });
    if (!user) throw new Error("User not found");
    // Logic to send reset password email goes here
  },

  // Reset a user's password using a token
  resetPassword: async (token, newPassword) => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const hashedPassword = await authService.hashPassword(newPassword);
    await db.user.update({
      where: { id: decoded.userId },
      data: { passwordHash: hashedPassword }, // Use 'passwordHash' instead of 'password'
    });
  },

  // Verify a user's email using a token
  verifyEmail: async (token) => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    await db.user.update({
      where: { id: decoded.userId },
      data: { emailVerified: true },
    });
  },

  // Get a user's profile by their ID
  getUserProfile: async (userId) => {
    console.log("getUserProfile called with userId:", userId); // Debugging statement

    if (!userId) {
      console.error("User ID is undefined in getUserProfile");
      throw new Error("User ID is undefined");
    }

    try {
      const user = await db.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          username: true,
          email: true,
          firstName: true,
          lastName: true,
          gender: true,
          phoneNumber: true,
          address: true,
          city: true,
          state: true,
          zipCode: true,
          country: true,
          maritalStatus: true,
          employmentStatus: true,
          occupation: true,
          employerName: true,
          annualSalary: true,
          taxFilingStatus: true,
          dependentsCount: true,
          preferredCurrency: true,
          subscriptionType: true,
          language: true,
          userRole: true,
          avatar: true,
        },
      });

      if (!user) {
        console.error("User not found with ID:", userId);
        throw new Error("User not found");
      }

      console.log("User retrieved successfully:", user);
      return user;
    } catch (error) {
      console.error("Error retrieving user profile:", error);
      throw error;
    }
  },

  // Change a user's password
  changePassword: async (userId, oldPassword, newPassword) => {
    const user = await db.user.findUnique({ where: { id: userId } });
    if (
      !user ||
      !(await authService.verifyPassword(oldPassword, user.password))
    ) {
      throw new Error("Invalid credentials");
    }
    const hashedPassword = await authService.hashPassword(newPassword);
    await db.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });
  },

  // Get all available roles
  getRoles: async () => {
    const roles = await db.role.findMany();
    return roles;
  },

  // Assign a role to a user
  assignRole: async (userId, role) => {
    await db.user.update({
      where: { id: userId },
      data: { role },
    });
  },

  // Revoke a role from a user
  revokeRole: async (userId, role) => {
    await db.user.update({
      where: { id: userId },
      data: { role: null },
    });
  },

  // Verify a JWT token
  verifyToken: async (token) => {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      return decoded;
    } catch (err) {
      return false;
    }
  },
};

module.exports = authService;
