import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import formRoute from './routes/form.js';

const app = express();
dotenv.config();

app.use(express.json());

// CORS setup
app.use(cors({ origin: 'http://localhost:4200' }));

// DB connection
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Connected to Database!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

app.use("/api/form", formRoute);

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  connectMongoDB();
  console.log(`Server is running on port ${PORT}`);
});




































