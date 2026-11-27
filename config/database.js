
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Server is running");
  } catch (err) {
    console.error("Error server does not work");
  }
};

module.exports = connectDB;