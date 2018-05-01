const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { Strategy, ExtractJwt } = require("passport-jwt");
const queries = require("../queries/user");
const { comparePassword } = require("./bcrypt");
const env=require("env2")("./config.env");

const localOptions = { usernameField: "email" };

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
	queries
		.getUser(email)
		.then(user => {
			console.log({
				user
			});
			
			if (!user) {
				return done(null, false);
			}
			return comparePassword(password, user);
		})
		.then(({ isMatch, user }) => {
			if (!isMatch) {
				return done(null, false);
			}
			return done(null, user);
		})
		.catch(done);
});

const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader("authorization"),
	secretOrKey: process.env.SECRET
};

const jwtLogin = new Strategy(jwtOptions, (payload, done) => {
	queries
		.getUserById(payload.sub)
		.then(user => {
			if (user) {
				done(null, user);
			} else {
				done(null, false);
			}
		})
		.catch(done);
});

passport.use(localLogin);
passport.use(jwtLogin);