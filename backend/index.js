
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TaskItem = require("./models/TaskItem");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 6000;

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// API Routes

// Create a Task (POST)
app.post("/tasks", async (req, res) => {
  try {
    const { title } = req.body;
    const newTask = new TaskItem({ title });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: "Error creating task", error: err });
  }
});

// Get All Tasks (GET)
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await TaskItem.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Error fetching tasks", error: err });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
