const { getUser, addUser } = require("../queries/user");
const {
  hashPassword,
  generatePassword
} = require("../authentication/bcrypt");



const jwt = require("jwt-simple");
const passport = require("passport");
const passportService = require("../authentication/passport");
const requireSignin = passport.authenticate("local", { session: false });
const requireAuth = passport.authenticate("jwt", { session: false });

const userToken = user => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.SECRET);
};

module.exports = app => {
  app.post("/api/signup", async (req, res) => {
    console.log("req.body:", req.body)
    try {
      const userExists = await getUser(req.body.email);
      if (!userExists) {
      
        req.body.password = await hashPassword(req.body.password);
        const newUserData = await addUser(req.body);
	res.json({ token: userToken(newUserData) });
   res.send(newUserData);
   console.log("json token:",res.json({ token: userToken(newUserData) }))
      } else {
        res.send("User already exists!");
      }
    } catch (err) {
      res.status(401).send(err);
      console.log("Add new user error: ", err);
    }
  });

  app.post("/api/login",requireSignin,(req, res) => {
  res.json({ token: userToken(req.user) });
});
}






















// const { getUser, addUser } = require("../queries/user");
// const {
//   hashPassword,
//   generatePassword,
//   validate
// } = require("../authentication/bcrypt");

// module.exports = app => {
//   app.post("/api/signup", async (req, res) => {
//     console.log("req.body:", req.body)
//     try {
//       const userExists = await getUser(req.body.email);
//       if (!userExists) {
//         const userPassword = generatePassword();
//         req.body.password = await hashPassword(userPassword);
//         const newUserData = await addUser(req.body);
//         console.log(newUserData);
//         res.send(newUserData);
//       } else {
//         res.send("User already exists!");
//       }
//     } catch (err) {
//       console.log("Add new user error: ", err);
//     }
//   });
//   app.post("/api/login", async (req, res) => {
//     console.log("req.body:", req.body);
//     try {
//       const userData = await getUser(req.body.email);
//       await validate(req.body.password, userData, userData[0].username);
//       req.session.user = { id: userData.id, username: userData[0].username };
    
//       res.send({ ...userData, password: null });
//     } catch (err) {
//       res.send({ error: err });
//     }
//   });
  
// };

// //created the routes from each signup and login instance in the front end
// //query needs to created for each function
// //database must be built into to
// // action and reducer for each one most also built for it...

