const express = require("express");
const router = express.Router();
const { User, Account } = require("../db");
const { passport } = require("../lib/passport");
const { uploadToAzureUsers } = require("../lib/multer");

//Get User & Account details
router.get("/", async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const account = await Account.findById(req.user.account);
    const data = {
      username: user.username,
      name: user.name,
      accountName: account.name,
    };
    res.status(200).json({ message: "Success", body: data });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "An Error Occured" });
  }
});

//Update User & Account details
router.put("/", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, { name: req.body.name });
    const account = await Account.findByIdAndUpdate(req.user.account, { name: req.body.accountName });
    res.status(200).json({ message: "Success" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "An Error Occured" });
  }
});

//Update User profile picture/avatar
router.post("/profile", uploadToAzureUsers.single("imgFile"), async (req, res) => {
  try {
    if (req.file) {
      const profilePicture = `/${req.file.container}/${req.file.blob}`;
      const user = await User.findByIdAndUpdate(req.user._id, { profilePicture });
      res.status(200).json({ message: "Success" });
    } else {
      res.status(500).json({ error: "An Error Occured" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "An Error Occured" });
  }
});

module.exports = router;
