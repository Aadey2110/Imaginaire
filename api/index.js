//npm packages
const express = require("express");
const cors = require("cors");

// configuring essentials
const { configDB } = require("./config/db");

// Routers
const stocksRouter = require("./routes/stocks");
const userRouter = require("./routes/users");

require("dotenv").config();
configDB();

const app = express();
const port = process.env.PORT || 5000;


app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});

//middlewares
app.use(cors());

// Routes
app.use("/api/stock", stocksRouter);
app.use("/api/user", userRouter);
