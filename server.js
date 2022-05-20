const express = require("express");
// const path = require("path");
// const favicon = require("serve-favicon");
const logger = require("morgan");

require("dotenv").config();
// require("./config/database");

const app = express();

app.use(logger("dev"));

app.use("/api/users", require("./routes/api/users"));

const port = process.env.PORT || 1010;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});