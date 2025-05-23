const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({
  employeeName: { type: String, required: true },
  leaveDate: { type: Date, required: true },
  reason: { type: String, required: true },
  leaveType: { type: String, default: "casual" }
});

module.exports = mongoose.model("Leave", leaveSchema);
