const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const session = require("express-session");
const passport = require("passport");
require("./google.auth");

app.use(express.json());
app.use(cors());
app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());

const connection = require("./Config/Config");
const OrgController = require("./Controller/Organization.controller");
const PropController = require("./Controller/Property.controller");
const FieldController = require("./Controller/Fields.controller");

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

// app.get("/", async (req, res) => {
//   return res.status(200).send("HomePage");
// });

app.get("/", (req, res) => {
  res.send(`<a href="/auth/google">Authenticate with google<a/>`);
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/callback",
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "/auth/failure",
  })
);

app.get("/auth/failure", (req, res) => {
  res.send("Something went wrong. Please try again later");
});

app.get("/protected", isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.displayName}`);
});

app.get("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.send("Goodbye!");
});

app.use("/organization", OrgController);
app.use("/properties", PropController);
app.use("/fields", FieldController);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected Established");
  } catch (err) {
    console.log("err:", err);
  }
  console.log("listening on port:", process.env.PORT);
});
