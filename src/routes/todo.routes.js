const {Router} = require("express");
const {
  getAllUserTasks,
  createTask,
  updateTask,
  taskCompleted,
  taskNotCompleted,
  deleteTask,
  changeTaskStatus,
} = require("../controllers/todo.controller");

const router = Router();

router.get("/api/v1/todo/:userId", getAllUserTasks);

router.post("/api/v1/todo/:userId", createTask);

router.put("/api/v1/todo/:id",updateTask);

router.put("/api/v1/todo/:id/iscompleted/", changeTaskStatus)

router.put("/api/v1/todo/completed", taskCompleted);

router.put("/api/v1/todo/not_completed", taskNotCompleted);

router.delete("/api/v1/todo/:id", deleteTask);

module.exports = router;