const { User } = require("../models");
const devConfig = require("../config/dev.json");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const randomstring = require("randomstring");

const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const FACEBOOK_APP_ID = "457573742207792";
const FACEBOOK_APP_SECRET = "6cb5b4954e1ec4e0f9b0daae96999971";

const GOOGLE_CLIENT_ID =
  "582045184385-akd4t5kjp2dtdbu2jfpo7j9faoumkd8o.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "Dngx9yJPUnSV4uUo1HwinDJa";

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "http://localhost:3000/signin/auth/facebook/secrets",
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

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/signin/auth/google/secrets",
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
module.exports = {
  index: async (req, res) => {
    const message = req.flash("error");
    res.render("signin/index", { message });
  },
  authenticate: passport.authenticate("facebook", { scope: ["email"] }),
  authenticateRedirect: passport.authenticate("facebook", {
    successRedirect: "/",
    failureRedirect: "/signin",
    failureFlash: "Đăng nhập thất bại, có thể thông tin đã tồn tại",
  }),

  authenticateGoogle: passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  }),
  authenticateGoogleRedirect: passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/signin",
    failureFlash: "Đăng nhập thất bại, có thể thông tin đã tồn tại",
  }),
};
