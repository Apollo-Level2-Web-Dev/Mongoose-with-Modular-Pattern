import { Router } from "express";
import { TaskController } from "./task.controller.js";

const router = Router();

router.post("/", TaskController.createTask);
router.get("/", TaskController.getAllTask);

router.patch("/:id", TaskController.updateTask);
export const TaskRouter = router;
