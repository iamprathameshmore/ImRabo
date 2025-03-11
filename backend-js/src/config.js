import dotenv from "dotenv";
import path from "path";

// Determine the correct .env file based on NODE_ENV
const envFile = `.env.${process.env.NODE_ENV || "development"}`;
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

// Export environment variables
export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
  dbUri: process.env.DB_URI,
  logLevel: process.env.LOG_LEVEL || "info",
  secretKey: process.env.SECRET_KEY,
};
