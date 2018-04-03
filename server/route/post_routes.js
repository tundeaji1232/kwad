const { getUser, addUser } = require("../queries/users");
const {
  hashPassword,
  generatePassword,
  validate
} = require("../authentication/bcrypt");
const newUserEmail = require("../authentication/email");

module.exports = app => {
  
  app.post("/api/signup", async (req, res) => {
    try {
      const userExists = await getUser(req.body.email);
      if (!userExists) {
        const userPassword = generatePassword();
        req.body.password = await hashPassword(userPassword);
        const newUserData = await addUser(req.body);
        newUserEmail(newUserData[0], userPassword);
        res.send(newUserData);
      } else {
        res.send("User already exists!");
      }
    } catch (err) {
      console.log("Add new user error: ", err);
    }
  });
  app.post("/api/login", async (req, res) => {
    try {
      const userData = await getUser(req.body.email);
      await validate(req.body.password, userData, req.body.username);
      req.session.user = { id: userData.id, username: userData[0].username };
      res.send({ ...userData, password: null });
    } catch (err) {
      res.send({ error: err });
    }
  });
  
};

//created the routes from each signup and login instance in the front end
//query needs to created for each function
//database must be built into to
// action and reducer for each one most also built for it...

