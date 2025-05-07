const User = require("../model/userModel");

const createUser = async (req, res) => {
  try {
    const { name, email, age, password } = req.body;
    const newUser = new User({ name, email, age, password });
    await newUser.save();
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    if (!users) res.status(200).json({ message: "No User Exists" });
    res.status(200).json({ message: "User fetched successfully", users });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const updateUserDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;
    const updateUser = await User.findByIdAndUpdate(id, { name: name, age: age, email: email });
    if (!updateUser) res.status(200).json({ message: "User not found" });
    res.status(200).json({ message: "User details updated", updateUser });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.deleteOne({ _id: id });
    if (!deleteUser) res.status(200).json({ message: "Something went wrong while deleting user" });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = { createUser, getUsers, updateUserDetails, deleteUser };
