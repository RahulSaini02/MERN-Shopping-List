import dotenv from "dotenv";

dotenv.config();

export default {
  mongoURI: process.env.mongoURI,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
};
