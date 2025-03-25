import 'dotenv/config';
import connectDB from './config/database.js';
import app from './app.js';
import os from "os";

const port = process.env.PORT || 3000;

// Connection To Database
const status = connectDB(process.env.MONGODB_URL);
console.log(status)

// app start
app.listen(port, () => console.log(`Server Started at ${port}`));

app.get("/health", async (req, res) => {
    const uptime = process.uptime();
    const timestamp = new Date().toISOString();
  
    // Check MongoDB connection
    const mongoStatus = status === 1 ? "connected" : "disconnected";
  
    // Check External API (Example: Google)
    let externalAPIStatus = "down";
    try {
      const response = await fetch("https://www.google.com");
      if (response.ok) externalAPIStatus = "up";
    } catch (error) {
      externalAPIStatus = "down";
    }
  
    // Get System Stats
    const memoryUsage = process.memoryUsage().heapUsed / 1024 / 1024; 
    const cpuLoad = os.loadavg()[0]; 
  
    res.status(200).json({
      status: "ok",
      uptime,
      timestamp,
      databases: {
        mongodb: mongoStatus,
      },
      externalAPIs: {
        google: externalAPIStatus,
      },
      system: {
        memoryUsage: `${memoryUsage.toFixed(2)} MB`,
        cpuLoad: cpuLoad.toFixed(2),
      },
    });
  });
