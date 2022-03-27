const mongoose = require("mongoose");
const User = require("./models/User");
const Account = require("./models/Account");
const Test = require("./models/Test");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.log("MongoDB error");
    console.log(err);
  }
};

module.exports = {
  connect,
  User,
  Account,
  Test,
};
