// import mongoose from "mongoose";
// import colors from "colors";
const mongoose = require("mongoose")
const colors = require("colors")


const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://aaronjoju:aaronjoju@cluster0.lj5x6u8.mongodb.net/?retryWrites=true&w=majority");
    console.log(`Mongo server run on ${mongoose.connection.host}`.bgGreen);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDB
// export default connectDB;
