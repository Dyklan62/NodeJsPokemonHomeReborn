const dotenv = require("dotenv");
const path = require("path");
dotenv.config({
  path: path.resolve(__dirname, process.env.NODE_ENV + ".env"),
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  DBHOST: process.env.DBHOST,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DB,
};
