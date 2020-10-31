require("dotenv").config();
const express = require("express");
const path = require("path");

const { PORT } = process.env;
const app = express();

app.use("/dist", express.static(path.resolve(__dirname, "../dist")));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../client/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
