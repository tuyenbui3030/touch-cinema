const { User } = require("../models");
const bcrypt = require("bcryptjs");
const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;

const initPassportLocal = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
      },
      async (req, email, password, done) => {
        try {
          const user = await User.findOne({
            where: {
              email: email,
              verified: true,
              role: 1,
            },
          });
          if (user === null) {
            return done(null, false);
          }
          const checkPassword = bcrypt.compareSync(password, user.password);
          if (checkPassword) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        } catch (error) {
          done(null);
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
module.exports = initPassportLocal;
