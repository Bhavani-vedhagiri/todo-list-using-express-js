const express = require("express");
const app = express();
const connectDB = require("../database/index");
const dotenv = require("dotenv");
dotenv.config();

const taskRoute = require("../routes/task");

// middleware
app.use(express.static("./public"));
app.use(express.json());

// external routes
app.use("/api/v1/tasks", taskRoute);

const start = async () => {
  try {
    await connectDB();
    app.listen(
      process.env.PORT,
      console.log(`Server  is listening on port ${process.env.PORT}`)
    );
  } catch (err) {
    console.log(err);
  }
};

start();
