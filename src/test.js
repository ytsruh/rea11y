const express = require("express");
const fetch = require("node-fetch");
const azureApiKey = "mUxo4Cy";
const router = express.Router();
const { Test, Report } = require("../db");
const { passport } = require("../lib/passport");
const { containerClient } = require("../lib/azureBlob");
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

//Run Test & generate Report
router.post("/:id/run", async (req, res) => {
  try {
    //Send response back to confirm that test has started
    res.status(200).json({ message: "Test has started" });
    //Get the test & the url
    const testSubject = await Test.findById(req.params.id);
    const url = testSubject.url;
    //Send to Azure Functions to get results
    const body = { a: 1 };
    const response = await fetch(`${process.env.API_URL}/api/fullTest?key=${azureApiKey}`, {
      method: "post",
      body: JSON.stringify({
        url: url,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    //Save Results in Storage
    const uniqueIdentifier = Math.random().toString().replace(/0\./, "");
    const blobName = `${uniqueIdentifier}.json`;
    const container = await containerClient("reports");
    const blockBlobClient = await container.getBlockBlobClient(blobName);
    const formatData = JSON.stringify(json);
    const uploadBlobResponse = await blockBlobClient.upload(formatData, formatData.length);
    //Save results in database
    const issues = json.data.issues;
    const reportData = {
      documentTitle: json.data.documentTitle,
      pageUrl: json.data.pageUrl,
      allIssues: issues.length,
      notice: 0,
      warning: 0,
      error: 0,
      report: `/reports/${blobName}`,
      test: req.params.id,
    };
    for (let i = 0; i < issues.length; i++) {
      const element = issues[i];
      reportData[element.type]++;
    }
    const report = await Report.create(reportData);
    //Update test with last tested date & report reference
    const updatedDate = Date.now().toString();
    const updateTest = await Test.findByIdAndUpdate(req.params.id, {
      lastTested: updatedDate,
      $push: { reports: report._id },
    });
  } catch (err) {
    console.log(err);
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
    })
      .populate("createdBy", ["name", "username"])
      .populate("reports");
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
