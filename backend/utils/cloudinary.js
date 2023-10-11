const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");

//config env file:
dotenv.config();


cloudinary.config({
  cloud_name: "dzhfnnbil",
  api_key: "699981234128896",
  api_secret: "u4Dzp3rakIeYlffjOlo9MdnXQaI",
});

module.exports = cloudinary;
