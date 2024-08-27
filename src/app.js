const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const errorHandler = require("./utils/errorHandler");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", routes);

// Centralized error handling
app.use(errorHandler);

module.exports = app;
