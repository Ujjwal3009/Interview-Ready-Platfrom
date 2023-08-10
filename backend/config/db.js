import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }

    // Set the MongoDB connection options
    this.options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    // Connect to MongoDB
    this.connect();

    Database.instance = this;
  }

  async connect() {
    try {
      const db_url =
        "mongodb+srv://Ujjwal3009:root@interview.coetqyo.mongodb.net/?retryWrites=true&w=majority";
      // Check if the database is already connected
      if (mongoose.connection.readyState !== 0) {
        return;
      }

      // Connect to MongoDB
      await mongoose.connect(db_url, this.options);
      console.log("MongoDB connected");
    } catch (error) {
      console.error("MongoDB connection error:", error);
      process.exit(1);
    }
  }

  async disconnect() {
    try {
      // Check if the database is connected
      if (mongoose.connection.readyState === 0) {
        return;
      }

      // Disconnect from MongoDB
      await mongoose.disconnect();
      console.log("MongoDB disconnected");
    } catch (error) {
      console.error("MongoDB disconnection error:", error);
      process.exit(1);
    }
  }
}

const dbInstance = new Database();

export default dbInstance;
