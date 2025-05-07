const express = require("express");
const router = express.Router();
const { createUser, getUsers, updateUserDetails, deleteUser } = require("../controller/userController");

router.post("/createUser", createUser);
router.get("/getUsers", getUsers);
router.patch("/updateUserDetails/:id", updateUserDetails);
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
