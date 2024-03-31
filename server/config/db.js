const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://localhost:27017/innerMindOasis",
    );
    console.log(`MongoDB connected: ${conn.connection.name}`);
  } catch (error) {
    console.log(`Unable to connect to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDb;