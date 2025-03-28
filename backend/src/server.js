import 'dotenv/config';
import connectDB from './config/database.js';
import app from './app.js';
import os from "os";
import http from 'http';
import { Server } from 'socket.io';
import setupSocket from './config/socket.js';
import fetch from "node-fetch"; // ✅ Fix fetch issue

const port = process.env.PORT || 3000;

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
    }
});

// ✅ Health Check API
app.get("/health", async (req, res) => {
    const uptime = process.uptime();
    const timestamp = new Date().toISOString();

    // ✅ Ensure MongoDB Connection is Checked Properly
    const mongoStatus = (await connectDB(process.env.MONGODB_URL)) ? "connected" : "disconnected";

    // ✅ Check External API (Example: Google)
    let externalAPIStatus = "down";
    try {
        const response = await fetch("https://www.google.com");
        if (response.ok) externalAPIStatus = "up";
    } catch (error) {
        externalAPIStatus = "down";
    }

    // ✅ Get System Stats
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

// ✅ Start Server After DB Connection is Ready
async function startServer() {
    try {
        await connectDB(process.env.MONGODB_URL);
        console.log("✅ Database Connected Successfully");

        // ✅ Initialize WebSocket Logic **After** DB is Connected
        await setupSocket(io);

        server.listen(port, '0.0.0.0', () => 
            console.log(`🚀 Server Started at http://localhost:${port}`)
          );
          
    } catch (error) {
        console.error("❌ Database Connection Failed:", error);
        process.exit(1); // Exit if DB connection fails
    }
}

startServer();
