const express = require("express");
const { createTask, getTasks, updateTaskDetails, getTaskById, deleteTask } = require("../controller/taskController");
const router = express.Router();

router.post("/createTask", createTask);
router.get("/getTasks", getTasks);
router.get("/getTaskById/:id", getTaskById);
router.patch("/updateTask/:id", updateTaskDetails);
router.delete("/deleteTask/:id", deleteTask);

module.exports = router;
