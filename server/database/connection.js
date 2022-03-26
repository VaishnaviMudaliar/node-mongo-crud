const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // mongodb connection
    const con = mongoose.connect(process.env.MONGO_URL);
  } catch (err) {}
};
