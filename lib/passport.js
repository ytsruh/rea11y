const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../db");

// By default, LocalStrategy expects to find credentials in parameters named username and password.
const Local = new LocalStrategy(async (username, password, done) => {
  try {
    const user = await User.findOne({
      where: { username },
    });
    if (!user) {
      return done(null, false);
    }
    if (!user.validPassword(password, user.password)) {
      return done(null, false);
    }
    return done(null, user);
  } catch (err) {
    console.log(err);
    return done(err);
  }
});

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const opts = {
  jwtFromRequest: ExtractJwt.fromExtractors([
    ExtractJwt.fromUrlQueryParameter("token"), //Looks in Query String for token parameter
    ExtractJwt.fromAuthHeaderWithScheme("token"), //Looks in Authorization Header & value must start 'token ...'
  ]),
  secretOrKey: process.env.JWTSECRET,
};

const JWT = new JwtStrategy(opts, async (jwt_payload, done) => {
  try {
    const user = await User.findOne({
      where: { id: jwt_payload.data.id },
    });
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (err) {
    console.log(err);
    return done(err);
  }
});

module.exports = {
  passport,
  Local,
  JWT,
};
