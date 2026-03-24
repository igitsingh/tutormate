const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ success: false, message: "No authentication token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || "tutormate_secret_key_2026");
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};
