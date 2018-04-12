const { getUser, addUser } = require("../queries/user");
const {
  hashPassword,
  generatePassword,
  validate
} = require("../authentication/bcrypt");
// const newUserEmail = require("../authentication/email");

module.exports = app => {
  
//   app.get("/signup", async (req, res) => {
//     try {
//       const userExists = await getUser(req.body.email);
//       console.log(req.body)
//       if (!userExists) {
//         const userPassword = generatePassword();
//         req.body.password = await hashPassword(userPassword);
//         const newUserData = await addUser(req.body);
//         // newUserEmail(newUserData[0], userPassword);
//         res.send(newUserData);
//       } else {
//         res.send("User already exists!");
//       }
//     } catch (err) {
//       console.log("Add new user error: ", err);
//     }
//   });
}