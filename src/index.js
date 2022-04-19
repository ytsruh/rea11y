const express = require("express");
const router = express.Router();
const { passport } = require("../lib/passport");

//Import and use non-authenticated routes
const auth = require("./auth");
router.use("/auth", auth);

//Set Auth unless in development
if (process.env.AUTH !== "false") {
  router.use(passport.authenticate("jwt", { session: false }));
}

//Import and use authenticated routes
const account = require("./account");
router.use("/account", account);
const tests = require("./test");
router.use("/test", tests);
const report = require("./report");
router.use("/report", report);
router.get("/", (req, res) => {
  res.json({
    message: "Welcome to Rea11y",
    version: process.env.APP_VERSION,
  });
});

module.exports = router;
