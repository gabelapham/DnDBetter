const express = require("express");
const app = express();
const middleware = require("./../routes/index.cjs");
app.use("/cat", middleware);
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
module.exports = app;