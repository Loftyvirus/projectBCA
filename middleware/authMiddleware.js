//verifying user via JWT token
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  // extract token
  const tokenParts = token.split(" ");  
  if (tokenParts.length !== 2) {
    return res.status(400).json({ message: "Malformed token" });
  }

  const bearerToken = tokenParts[1];  

  try {
    const decoded = jwt.verify(bearerToken, process.env.JWT_SECRET);
    req.user = decoded; 
    next();  
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};



//properly check that a specific semester has specific subjets only.


