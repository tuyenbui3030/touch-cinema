const { User } = require("../models");
const devConfig = require("../config/dev.json");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const randomstring = require("randomstring");

const FacebookStrategy = require("passport-facebook").Strategy;

const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID || "457573742207792";
const FACEBOOK_APP_SECRET =
  process.env.FACEBOOK_APP_SECRET || "6cb5b4954e1ec4e0f9b0daae96999971";

const FACEBOOK_CALLBACK_URL =
  process.env.FACEBOOK_CALLBACK_URL ||
  "http://localhost:3000/signin/auth/facebook/secrets";

// clientID: "1247804085639244",
// clientSecret: "0e181ca279eff8b5021fcc60261a4dd7",
// callbackURL:
//   "https://touch-cinema.herokuapp.com/signin/auth/facebook/secrets",
// profileFields: ["displayName", "emails"],
const initPassportFacebook = () => {
  passport.use(
    new FacebookStrategy(
      {
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: FACEBOOK_CALLBACK_URL,
        profileFields: ["displayName", "emails"],
      },
      async function (accessToken, refreshToken, profile, cb) {
        const userItem = await User.findOne({
          where: {
            facebookId: profile._json.id,
          },
        });
        if (userItem) {
          cb(null, userItem);
        } else {
          try {
            const randPass = randomstring.generate(10);
            const password = bcrypt.hashSync(
              randPass,
              devConfig.authentication.saltRounds
            );
            const newUser = await User.create({
              facebookId: profile._json.id,
              fullname: profile._json.name,
              email: profile._json.email,
              password: password,
              verified: true,
              token: randomstring.generate(100),
            });
            cb(null, newUser);
          } catch (error) {
            cb(null);
          }
        }
      }
    )
  );
  passport.serializeUser(function (user, done) {
    done(null, user);
  });
  passport.deserializeUser(function (user, done) {
    done(null, user);
  });
};
module.exports = initPassportFacebook;
