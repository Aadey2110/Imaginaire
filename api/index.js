const express = require("express");
require("dotenv").config();

const { configDB } = require("./config/db");

const stocksRouter = require("./routes/stocks");
const userRouter = require("./routes/users");

const app = express();
const port = process.env.PORT;

configDB();

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});

app.use("/api/stock", stocksRouter);
app.use("/api/user", userRouter);
