const { sequelize } = require("./models");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
require("express-async-errors");
const path = require("path");
const { Showtime, Booking, Ticket } = require("./models");

const expressLayouts = require("express-ejs-layouts");
const cookieSession = require("cookie-session");
const flash = require("connect-flash");

const passport = require("passport");

const app = express();

const server = http.createServer(app);
const io = socketio(server);

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
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
// app.use("/public", express.static("public"));
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(expressLayouts);
app.set("layout extractScripts", true);
app.set("layout", "../views/layouts/layout.ejs");
//View engine EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

require("./middlewares/locals.middleware")(app);
app.use("/", require("./routes/home.route"));
app.use("/detail", require("./routes/detail.route"));
app.use("/booking", require("./routes/booking.route"));
app.use("/signin", require("./routes/signin.route"));
app.use("/signup", require("./routes/signup.route"));
app.post("/signout", (req, res) => {
  req.logOut();
  req.session.passport = false;
  res.redirect("/signin");
});
app.post("/admin/signout", (req, res) => {
  req.logOut();
  req.session.passport = false;
  res.redirect("/admin/signin");
});
app.use("/cinema", require("./routes/cinema.route"));
app.use("/movie", require("./routes/movie.route"));
app.use("/account", require("./routes/account.route"));

app.use("/admin/signin", require("./routes/admin/signin.route"));
app.use("/admin", require("./routes/admin/dashboard.route"));
app.use("/admin/cinema", require("./routes/admin/cinema.route"));
app.use("/admin/movie", require("./routes/admin/movie.route"));
app.use("/admin/statistical", require("./routes/admin/statistical.route"));

app.get("/test", async (req, res) => {
  const data = await Ticket.findAll();
  res.json(data);
});
app.post("/test", (req, res) => {
  res.send(req.body);
});

app.use("/admin", function (req, res) {
  res.render("admin/404", { layout: false });
});
app.use("/admin", function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).render("admin/500", { layout: false });
});

app.use(function (req, res) {
  res.render("404");
});
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).render("500");
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  await sequelize.sync({ alter: true });
  console.log("Database synced!");
});

// io.on("connection", (socket) => {
//   console.log("user: " + socket.id);
//   socket.on("message", (data) => {
//     socket.broadcast.emit("message", data);
//   });
// });
io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("send-message", (message, room) => {
    console.log("Result ", {
      message,
      room,
    });
    socket.to(room).emit("showtime", message);
  });
  socket.on("join-room", (room) => {
    socket.join(room);
  });
});
