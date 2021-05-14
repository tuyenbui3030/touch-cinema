const express = require("express");
const path = require("path");
const { User } = require("./models");

const expressLayouts = require("express-ejs-layouts");
const cookieSession = require("cookie-session");
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const app = express();

const FACEBOOK_APP_ID = "457573742207792";
const FACEBOOK_APP_SECRET = "6cb5b4954e1ec4e0f9b0daae96999971";
app.use(passport.initialize());
app.use(passport.session());

//middleware Cookie Session
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_KEY || "secret"],
    maxAge: 24 * 60 * 60 * 1000,
  })
);
//Sử dụng để bắt request POST & GET...
app.use(
  express.urlencoded({
    extended: true,
  })
);
// app.use("/public", express.static("public"));
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(expressLayouts);
app.set("layout extractScripts", true);
app.set("layout", "../views/layouts/layout.ejs");
//View engine EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "http://localhost:3000/auth/facebook/secrets",
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
app.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);

app.get(
  "/auth/facebook/secrets",
  passport.authenticate("facebook", { failureRedirect: "/signin" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);
app.use("/", require("./routes/home.route"));
app.use("/detail", require("./routes/detail.route"));
app.use("/booking", require("./routes/booking.route"));
app.use("/signin", require("./routes/signin.route"));
app.use("/signup", require("./routes/signup.route"));
app.use("/test", (req, res) => {
  console.log(req.session);
  res.json(req.session.isAuthenticated);
});
app.use(function (req, res) {
  res.render("404");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
