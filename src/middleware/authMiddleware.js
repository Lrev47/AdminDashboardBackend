const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  // Debugging: Log the incoming request method and URL
  console.log(`Protect middleware: ${req.method} request to ${req.url}`);

  // Debugging: Log the authorization header
  const authHeader = req.headers.authorization;
  console.log("Authorization Header:", authHeader);

  // Check if the Authorization header is present and properly formatted
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.log(
      "Authorization header is missing or does not start with 'Bearer '"
    );
    return res.status(401).json({ message: "Not authorized" });
  }

  // Extract the token from the header
  const token = authHeader.split(" ")[1];
  console.log("Extracted Token:", token);

  if (!token) {
    console.log("Token is missing after splitting the Authorization header");
    return res.status(401).json({ message: "Not authorized" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded JWT:", decoded);

    // Attach the decoded user information to the request object
    req.user = decoded;
    console.log("User set on request:", req.user);

    // Move to the next middleware or route handler
    next();
  } catch (error) {
    // Handle various token errors
    console.log("JWT verification error:", error);

    if (error.name === "TokenExpiredError") {
      console.log("Token has expired");
      return res.status(401).json({ message: "Token expired" });
    } else if (error.name === "JsonWebTokenError") {
      console.log("Invalid JWT token");
      return res.status(401).json({ message: "Invalid token" });
    } else {
      console.log("Unexpected error during JWT verification");
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

const restrictTo =
  (...roles) =>
  (req, res, next) => {
    // Debugging: Log the user role and the roles allowed for this route
    console.log(
      "RestrictTo middleware: User role:",
      req.user ? req.user.role : "undefined"
    );
    console.log("Roles allowed:", roles);

    // Check if the user has one of the allowed roles
    if (!roles.includes(req.user.role)) {
      console.log("User role is not permitted for this action");
      return res.status(403).json({
        message: "Forbidden: You do not have permission to perform this action",
      });
    }

    // Move to the next middleware or route handler
    next();
  };

const logRequest = (req, res, next) => {
  // Log the request method, URL, and user ID (if authenticated)
  console.log(
    `LogRequest middleware: ${req.method} request to ${req.url} by user ${
      req.user ? req.user.id : "unauthenticated"
    }`
  );

  // Move to the next middleware or route handler
  next();
};

module.exports = { protect, restrictTo, logRequest };
