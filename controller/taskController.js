const Task = require("../model/Taskmodel");

const createTask = async (req, res) => {
  try {
    const { title, description, status, dueDate } = req.body;
    const response = new Task({ title, description, status, dueDate });
    await response.save();
    res.status(201).json({ message: "Task created successfully", tasks: response });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getTasks = async (req, res) => {
  try {
    const response = await Task.find({});
    if (!response) res.status(200).json({ message: "No Task Exists" });
    res.status(200).json({ message: "Task fetched successfully", response });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Task.findOne({ _id: id });
    if (!response) res.status(200).json({ message: "No Task Exists" });
    res.status(200).json({ message: "Task fetched successfully", response });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const updateTaskDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status, dueDate } = req.body;
    const response = await Task.findByIdAndUpdate(id, { title: title, description: description, status: status, dueDate: dueDate });
    if (!response) res.status(200).json({ message: "Task not found" });
    res.status(200).json({ message: "Task details updated", response });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Task.deleteOne({ _id: id });
    if (!response) res.status(200).json({ message: "Something went wrong while deleting user" });
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = { createTask, getTasks, getTaskById, updateTaskDetails, deleteTask };
