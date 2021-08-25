const { User } = require("../models");
const devConfig = require("../config/dev.json");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const randomstring = require("randomstring");

const GoogleStrategy = require("passport-google-oauth20").Strategy;

const GOOGLE_CLIENT_ID = [
  process.env.GOOGLE_CLIENT_ID ||
    "582045184385-akd4t5kjp2dtdbu2jfpo7j9faoumkd8o.apps.googleusercontent.com",
];
const GOOGLE_CLIENT_SECRET =
  process.env.GOOGLE_CLIENT_SECRET || "Dngx9yJPUnSV4uUo1HwinDJa";

const callbackURL =
  process.env.GOOGLE_CALLBACK_URL ||
  "http://localhost:3000/signin/auth/google/secrets";

const initPassportGoogle = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: callbackURL,
      },
      async function (accessToken, refreshToken, profile, cb) {
        const userItem = await User.findOne({
          where: {
            googleId: profile._json.sub,
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
            const newUserGoogle = await User.create({
              googleId: profile._json.sub,
              fullname: profile._json.name,
              email: profile._json.email,
              password: password,
              verified: true,
              token: randomstring.generate(100),
            });
            cb(null, newUserGoogle);
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
module.exports = initPassportGoogle;
