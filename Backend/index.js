import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRouter from "./route/book.route.js";

const app = express();

app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 4000;
const MongoDB_URL = process.env.MongoDB_URL;

// Connect to mongoDB

try {
  mongoose.connect(MongoDB_URL);
  console.log("Connected to mongoDb");
} catch (error) {
  console.log("Error:-", error);
}

//defining Routes:-

app.use("/book", bookRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
