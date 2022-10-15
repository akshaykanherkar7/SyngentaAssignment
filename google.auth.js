const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

const GOOGLE_CLIENT_ID =
  "971610848251-g7ng6bs2s2u7fcitqa57io1ak7s7cgim.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (user, cb) {
  cb(null, user);
});
