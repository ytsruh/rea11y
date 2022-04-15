const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema(
  {
    pageUrl: {
      type: String,
      required: true,
    },
    documentTitle: {
      type: String,
    },
    report: {
      type: String,
    },
    allIssues: {
      type: Number,
    },
    notice: {
      type: Number,
    },
    warning: {
      type: Number,
    },
    error: {
      type: Number,
    },
    test: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Test",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Report", ReportSchema);
