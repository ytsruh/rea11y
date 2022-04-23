const express = require("express");
const fetch = require("node-fetch");
const azureApiKey = "mUxo4Cy";
const router = express.Router();
const { Report } = require("../db");
const { passport } = require("../lib/passport");
const { blobClient } = require("../lib/azureBlob");

//Find a Report by ID for a Test
router.get("/:id", async (req, res) => {
  try {
    /*
        Retrieve report entry from blob database
    */
    const data = await Report.findOne({
      _id: req.params.id,
    });
    /*
        Retrieve full report from blob storage
    */
    //Split report entry into array
    const reportId = data.report.split("/");
    const reportBlob = await blobClient("reports", reportId[2]);
    const download = await reportBlob.downloadToBuffer(Buffer);
    const jsonReport = await JSON.parse(download);
    /*
        Send all data as response
    */
    res.status(200).json({
      summary: data,
      report: jsonReport,
    });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong", err });
  }
});

module.exports = router;
