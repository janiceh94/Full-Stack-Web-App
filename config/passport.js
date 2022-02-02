const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const Homecook = require ("../models/Homecook")


passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK,
        },
        function (accessToken, refreshToken, profile, cb) {
            Homecook.findOne({ googleId: profile.id }, function (err, homecook) {
                if (err) return cb(err);
                if (homecook) {
                return cb(null, homecook);
                } else {
                // we have a new student via OAuth!
                const newHomecook = new Homecook({
                    name: profile.displayName,
                    username: profile.displayName,
                    email: profile.emails[0].value,
                    googleId: profile.id,
                });
                newHomecook.save(function (err) {
                    if (err) return cb(err);
                    return cb(null, newHomecook);
                });
            }
        });
      }
    )
  );

passport.serializeUser(function(homecook, done) {
    done(null, homecook.id);
});
passport.deserializeUser(function (id, done) {
    Homecook.findById(id, function (err, homecook) {
      done(err, homecook);
    });
});