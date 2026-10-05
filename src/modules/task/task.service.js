import Task from "./task.model.js";

const createTaskIntoDB = async (payload) => {
  // console.log("Body", req.body);
  const task = await Task.create(payload);

  return task;
};

const getAllTaskFromDB = async () => {
  const tasks = await Task.find();
  return tasks;
};

const updateTaskIntoDB = async (id, payload) => {
  const task = await Task.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    throw new Error("Task not found!!");
  }
  return task;
};

export const TaskService = {
  createTaskIntoDB,
  getAllTaskFromDB,
  updateTaskIntoDB,
};
