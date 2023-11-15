const express = require("express");
const router = express.Router();
const fact = require("./facts.cjs");
router.get("/facts", fact);
module.exports = router;