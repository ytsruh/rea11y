const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: 2,
      max: 150,
    },
    url: {
      type: String,
      required: true,
      min: 2,
      max: 1000,
    },
    image: {
      type: String,
    },
    account: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Account",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    lastTested: {
      type: Date,
      index: true, //Must add index=true for Cosmos DB to allow sorting. Without an Index Cosmos will not sort
    },
    reports: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Report",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Test", TestSchema);
