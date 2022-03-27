const express = require("express");
const router = express.Router();
const { Test } = require("../db");
const { passport } = require("../lib/passport");

//Create new Test
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const test = await Test.create({
      title: req.body.title,
      url: req.body.url,
      account: req.user.account,
      createdBy: req.user._id,
    });
    res.status(200).json({ message: "Test created successfully", data: test });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong", err });
  }
});

//Create all Tests for account
router.get("/", async (req, res) => {
  console.log(req.body);
  try {
    const data = await Test.find({
      account: req.user.account,
    }).populate("createdBy", ["name", "username"]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong", err });
  }
});

module.exports = router;
