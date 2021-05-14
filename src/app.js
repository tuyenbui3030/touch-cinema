const express = require("express");
const path = require("path");

const expressLayouts = require("express-ejs-layouts");
const cookieSession = require("cookie-session");
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const app = express();

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

app.use("/", require("./routes/home.route"));
app.use("/detail", require("./routes/detail.route"));
app.use("/booking", require("./routes/booking.route"));
app.use("/signin", require("./routes/signin.route"));
app.use("/signup", require("./routes/signup.route"));

app.use(function (req, res) {
  res.render("404");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});