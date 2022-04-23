const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();
const { Test } = require("../db");

//Get data for app dashboard
router.get("/", async (req, res) => {
  try {
    //Get number of tests
    const testsCount = await Test.count({
      account: req.user.account,
    });
    //Get latest 5 tests
    const latestTests = await Test.find({
      account: req.user.account,
    })
      .sort({ lastTested: "desc" })
      .limit(5)
      .populate("createdBy", ["name", "username"])
      .populate("reports");
    /*
        Send all data as response
    */
    res.status(200).json({
      testsCount,
      latestTests,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong", err });
  }
});

module.exports = router;
