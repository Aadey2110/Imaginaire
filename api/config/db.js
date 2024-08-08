const mongoose = require("mongoose");

const dbUri = process.env.DB_URI;

function configDB() {
  mongoose
    .connect(dbUri)
    .then(console.log("MongoDB Connected Successfully"))
    .catch((err) => {
      console.error(err);
      console.log("Error From db.js");
    });
}

module.exports = { configDB };
