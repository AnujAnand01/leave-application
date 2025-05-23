const Leave = require("./models/Leave");

exports.submitLeave = async (req, res) => {
  try {
    const { employeeName, leaveDate, reason } = req.body;

    if (!employeeName || !leaveDate || !reason) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const leave = new Leave({ employeeName, leaveDate, reason });
    await leave.save();
    res.status(201).json({ message: "Leave submitted successfully." });
  } catch (error) {
    // ✅ Error handling example
    res.status(500).json({ error: "Server error. Could not submit leave." });
  }
};
