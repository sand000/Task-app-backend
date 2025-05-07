const express = require("express");
const app = express();
const db = require("./config/db.js");
const cors = require("cors");
require("dotenv").config();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
const PORT = process.env.PORT || 8080;
db();

const userRouter = require("./route/userRoute.js");
const taskRoute = require("./route/taskRoute.js");

app.use("/user", userRouter);
app.use("/task", taskRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
