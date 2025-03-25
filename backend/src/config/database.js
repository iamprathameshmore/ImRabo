import mongoose from "mongoose";

async function connectDB(url) {
  try {
    await mongoose.connect(url);
    return mongoose.connection.readyState; // 1 = connected
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // Exit process on failure
  }
}

export default connectDB;
