const { User } = require("../models");
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;

const FACEBOOK_APP_ID = "457573742207792";
const FACEBOOK_APP_SECRET = "6cb5b4954e1ec4e0f9b0daae96999971";
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
        const newUser = await User.create({
          facebookId: profile._json.id,
          fullname: profile._json.name,
          email: profile._json.email,
          password: "hello",
          token: accessToken,
        });
        cb(null, newUser);
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
    res.render("signin/index");
  },
  authenticate: passport.authenticate("facebook", { scope: ["email"] }),
  authenticateRedirect: passport.authenticate("facebook", {
    successRedirect: "/",
    failureRedirect: "/signin",
  }),
};