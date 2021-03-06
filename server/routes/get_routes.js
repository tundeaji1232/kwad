const { oneUser } = require("../queries/user");
const { getOpportunities }= require("../queries/opportunityQuery");
const { getUser, addUser } = require("../queries/user");
const { hashPassword,generatePassword } = require("../authentication/bcrypt");
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
  
  app.get("/api/fetchUser",requireAuth, async (req, res) => {
    res.send(req.user);
  });

// exports.getUser = (req, res) => {
//   res.send(req.user);
// };

// app.get("/api/fetchUser", async (req, res) => {
//   try {
//     const userId = req.query.id
//       ? req.query.id
//       : req.session.user ? req.session.user.id : null;
//     if (userId) {
//       const profileData = await oneUser(userId);
//       res.send({ ...profileData, password: null });
//     } else {
//       res.send({ error: "Please log in" });
//     }
//   } catch (err) {
//     throw err;
//   }
// });

  // app.get("/api/opportunities", async (req,res)=>{
  //   try {
  //     const opportunityData = await getOpportunities()
  //     .then((data) => {
  //       return res.send(opportunityData);
  //   })
     
  //   } catch (err){
  //     throw err;
  //   }
  // })


  app.get("/api/opportunities", async (req,res)=>{
    try {
      const opportunityData = await getOpportunities()
          .then((data) => {
        	res.send(JSON.stringify(data));
    })
     
    } catch (err){
      throw err;
    }
  })


}