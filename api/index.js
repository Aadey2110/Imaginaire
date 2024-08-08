const express = require("express");
require("dotenv").config();

const { configDB } = require("./config/db");

const app = express();
const port = process.env.PORT;

configDB();

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});
