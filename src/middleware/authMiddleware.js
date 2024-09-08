const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  if (process.env.NODE_ENV !== "production") {
    console.log(`Protect middleware: ${req.method} request to ${req.url}`);
    console.log("Authorization Header:", req.headers.authorization);
  }

  // Get the authorization header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Not authorized, no token provided" });
  }

  // Extract the token from the header
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Not authorized, token missing" });
  }

  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Log the decoded token structure for debugging purposes
    if (process.env.NODE_ENV !== "production") {
      console.log("Decoded Token:", decoded);
    }

    // Check if the decoded token contains the userId or fallback to id
    req.user = {
      id: decoded.userId || decoded.id,
      role: decoded.role || "user", // Default to "user" if role is not present
    };

    // If the ID is still missing, respond with an error
    if (!req.user.id) {
      return res.status(401).json({ message: "User ID is missing from token" });
    }

    // Proceed to the next middleware or controller
    next();
  } catch (error) {
    // Handle token errors (expired, invalid, etc.)
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    } else {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

const restrictTo =
  (...roles) =>
  (req, res, next) => {
    if (!req.user || !req.user.role) {
      return res.status(403).json({
        message: "Forbidden: You do not have permission to perform this action",
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Forbidden: You do not have permission to perform this action",
      });
    }

    next();
  };

const logRequest = (req, res, next) => {
  if (process.env.NODE_ENV !== "production") {
    console.log(
      `LogRequest middleware: ${req.method} request to ${req.url} by user ${
        req.user ? req.user.id : "unauthenticated"
      }`
    );
  }
  next();
};

module.exports = { protect, restrictTo, logRequest };
