const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const routes = require("./src/routes");

const { PORT } = process.env;

var app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
