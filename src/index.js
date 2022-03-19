const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome Re-a11y",
    version: process.env.APP_VERSION,
  });
});

module.exports = router;
