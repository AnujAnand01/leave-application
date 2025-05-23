const express = require("express");
const router = express.Router();
const leaveController = require("../controllers/leaveController");

router.post("/submit", leaveController.submitLeave);

module.exports = router;
