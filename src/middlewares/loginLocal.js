const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");
const passport = require("passport");
const passportLocal = require("passport-local");
let LocalStrategy = passportLocal.Strategy;

module.exports = (req, res, next) => {
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
              [Op.and]: [{ email: email }, { id: 31 }],
            },
          });
          console.log("nè", user);
          if (!user) {
            return done(null, false);
          }
          if (user.verified === true) {
            const checkPassword = bcrypt.compareSync(password, user.password);

            if (!checkPassword) {
              return done(null, false);
            }
          }
          return done(null, user);
        } catch (error) {
          console.log(error);
          return done(null, false);
        }
      }
    )
  );
  next();
};
