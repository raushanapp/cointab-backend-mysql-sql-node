const express = require("express");
const app = express();
const cors = require("cors");
const userController= require("./controller/userController")

app.use(cors());
app.use(express.json());
app.use("/users", userController);

module.exports = app;