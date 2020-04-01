const passport = require("passport");

module.exports = app => {
  // Google loging  auth
  // @route GET /auth/google
  // @desc Test Route route
  // @access Public
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      // profile and email from google
      scope: ["profile", "email"]
    })
  );

  // @route GET /auth/google/callback
  // @desc Test Route route
  // @access Public
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/post");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
