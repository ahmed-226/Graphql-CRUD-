const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URL);
    
    const conn = await mongoose.connect(process.env.MONGO_URL);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
  } catch (error) {
    console.error(`Error: ${error.message}`.red);
    process.exit(1);
  }
};

module.exports = connectDB 