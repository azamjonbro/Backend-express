require("dotenv").config();
const mongoose = require("mongoose");

exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connection successful");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1); // xatolik bo‘lsa, dasturdan chiqish tavsiya etiladi
  }
};

exports.disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log("🔌 MongoDB disconnected");
  } catch (error) {
    console.error("❌ Disconnect error:", error.message);
  }
};
