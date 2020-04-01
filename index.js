const express = require("express");
const authRoute = require("./routes/authRoutes");
const userRoute = require("./routes/userRoutes");
const connectDB = require("./config/db");
const cookieSession = require("cookie-session");
const passport = require("passport");
const colors = require("colors");
const dotenv = require("dotenv");
const User = require("./models/User");
const UserAuth = require("./models/UserAuth");
const keys = require("./config/keys");
const auth = require("./routes/auth");
require("./services/passport");

const app = express();

//Init Middleware
app.use(express.json({ extended: false }));

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Connect db
connectDB();

app.use("/", userRoute);
app.use("/", auth);

authRoute(app);

//require("./routes/authRoutes")(app);

// const PORT = process.env.PORT || 5000;
// app.listen(5000);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
