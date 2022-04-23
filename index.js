require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const { passport, Local, JWT } = require("./lib/passport");
const db = require("./db");

//Config middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
// Set json pretty printing
app.set("json spaces", 2);
// parse application/json
app.use(express.json());
//Config rate limiting
const limiter = rateLimit({
  windowMs: 1 * 30 * 1000, // 30 Seconds
  max: 25, // limit each IP to 25 requests per windowMs
  handler: (req, res) => {
    res.status(403).json({
      error: "Rate Limited",
      status: 403,
      message: "Error: There have been too many requests. Please try again later",
      requestsAllowedAgainAt: req.rateLimit.resetTime,
    });
  },
});
//  Apply rate limit to all requests
app.use(limiter);

//Require & use Passport
app.use(passport.initialize());
passport.use("local", Local);
passport.use("jwt", JWT);

//Import & use routes
const api = require("./src");
app.use("/", api);

// Handle route not found (404)
app.use((req, res) => {
  res.status(404).send({
    status: 404,
    error: "Route: " + req.url + " - not found.",
  });
});

// Handle errors
app.use((err, req, res, next) => {
  res.status(500).json({
    error: "Something went wrong",
    status: 500,
    err,
  });
});

/*
    Start app
*/
app.listen(process.env.PORT, async () => {
  try {
    await db.connect();
    console.log(`App listening at port ${process.env.PORT}`);
  } catch (err) {
    console.log(`Something went wrong:`);
    console.log(err);
  }
});
