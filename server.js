const express = require("express");
const mongoose = require("mongoose");
const router = require("./router.js");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/", router);

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DB connected!"))
  .catch((err) => console.log("DB ERROR", err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
