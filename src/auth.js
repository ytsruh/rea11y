const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { User, Account } = require("../db");

//Create new account
router.post("/create", async (req, res) => {
  try {
    //Create an account
    const account = await Account.create({ name: req.body.accountName });
    const id = account._id;
    //Create a new user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = await User.create({
      username: req.body.username,
      password: hashedPassword,
      account: id,
    });
    //add user to account
    await account.users.push(user._id);
    const updatedAccount = await account.save();
    res.status(200).json({
      success: "Success: Account & user created",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "An Error Occured" });
  }
});

//Log user in and return JWT
router.post("/login", async (req, res) => {
  try {
    //find user & validate password
    const user = await User.findOne({ username: req.body.username });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log(user);
    console.log(hashedPassword);
    const match = await bcrypt.compare(req.body.password, user.password);
    //Send response based on result
    if (match) {
      const expiry = Math.floor(Date.now() / 1000) + 60 * 60 * 24; //Expires in 24 hours
      const token = jwt.sign(
        {
          data: {
            id: user.id,
            username: user.username,
          },
          exp: expiry,
        },
        process.env.JWTSECRET
      );
      const userData = {
        name: user.name,
        username: user.username,
        account: user.account,
        profilePicture: user.profilePicture,
      };
      res.status(200).json({ token, expiry, userData });
    } else {
      res.status(401).json({ error: "Unathorised: Wrong username or passwordsssss" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "An Error Occured" });
  }
});

module.exports = router;
