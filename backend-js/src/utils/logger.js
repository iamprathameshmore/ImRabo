import path from "path";
import fs from "fs";
import pinoLogger from "pino";

const logDir = path.join(process.cwd(), "logs");
fs.mkdirSync(logDir, { recursive: true });

const env = process.env.NODE_ENV || "debug";

const date = new Date()
const formattedDate = date.toISOString().split("T")[0]; 

const logConfig = {
  debug: { level: "debug", file: `./debug/${formattedDate}.log` },
  test: { level: "warn", file: `./test/${formattedDate}.log` },
  release: { level: "info", file: `./release/${formattedDate}.log` },
};


const logFilePath = path.join(logDir, logConfig[env].file);


const logger = pinoLogger(
  {
    level: logConfig[env].level,
    transport:
      env === "debug"
        ? { target: "pino-pretty" } 
        : undefined, 
  },
  pinoLogger.destination(logFilePath),
);

export default logger;
