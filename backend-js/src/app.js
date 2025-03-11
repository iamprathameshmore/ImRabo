import express from "express";
import CORS from "cors";
import pino from "pino-http";

import AuthRouter from "./routes/authRoute.js";
import logger from "./utils/logger.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();


app.use(
  pino({
    logger,
    level: "info",
  }),
);

// ✅ Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(CORS());

// ✅ Route Middleware
app.use(AuthRouter);

// ✅ Error Handling Middleware (Captures errors & logs them)
app.use((err, req, res, next) => {
  logger.error(err); // Log error to console & file
  res.status(500).json({ message: "Something went wrong!" });
});



app.get("/error", (req, res, next) => {
    try {
        throw new Error("This is a sample error");
    } catch (err) {
        next(err); // Pass error to centralized error handler
    }
})

app.use(errorHandler)



export default app;
