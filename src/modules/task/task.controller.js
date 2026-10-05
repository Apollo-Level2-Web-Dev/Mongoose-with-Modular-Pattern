import { TaskService } from "./task.service.js";

const createTask = async (req, res) => {
  try {
    const task = await TaskService.createTaskIntoDB(req.body);
    res.status(201).json({
      success: true,
      message: "Task assigned sucessfully!",
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const getAllTask = async (req, res) => {
  try {
    const task = await TaskService.getAllTaskFromDB();
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
};
const updateTask = async (req, res) => {
  try {
    const task = await TaskService.updateTaskIntoDB(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Task updated sucessfully!",
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

export const TaskController = {
  createTask,
  getAllTask,
  updateTask,
};
