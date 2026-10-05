import express from "express";
import Task from "./modules/task/task.model.js";
import { TaskRouter } from "./modules/task/task.route.js";
const app = express();
app.use(express.json());

// Task
app.use("/api/task", TaskRouter);

// User
// app.use("/api/user", UserRouter);

app.get("/api/task/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      res.status(404).json({
        success: false,
        message: "Task not found!!",
      });
    }
    res.status(200).json({
      success: true,
      message: "Task retrived sucessfully!",
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
});

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the mongoose session",
  });
});

export default app;
