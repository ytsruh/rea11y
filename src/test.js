const express = require("express");
const router = express.Router();
const { Test } = require("../db");
const { passport } = require("../lib/passport");
const { uploadToAzureTests } = require("../lib/multer");

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

//Update Test image
router.post("/:id/image", uploadToAzureTests.single("imgFile"), async (req, res) => {
  try {
    if (req.file) {
      const imageLocation = `/${req.file.container}/${req.file.blob}`;
      const user = await Test.findByIdAndUpdate(req.params.id, { image: imageLocation });
      res.status(200).json({ message: "Success" });
    } else {
      res.status(500).json({ error: "An Error Occured" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "An Error Occured" });
  }
});

//Update Test by ID
router.put("/:id", async (req, res) => {
  try {
    const test = await Test.findByIdAndUpdate(req.params.id, { title: req.body.title });
    res.status(200).json({ message: "Success" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "An Error Occured" });
  }
});

//Find all Tests for account
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

//Find a Tests by ID for account
router.get("/:id", async (req, res) => {
  try {
    const data = await Test.findOne({
      account: req.user.account,
      _id: req.params.id,
    }).populate("createdBy", ["name", "username"]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong", err });
  }
});

//Delete a test
router.delete("/:id", async (req, res) => {
  try {
    const data = await Test.findByIdAndDelete(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong", err });
  }
});

module.exports = router;
