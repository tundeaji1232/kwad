const { oneUser } = require("../queries/user");

module.exports = app => {
  
  app.get("/api/fetchUser", async (req, res) => {
    try {
      const userId = req.query.id
        ? req.query.id
        : req.session.user ? req.session.user.id : null;
      if (userId) {
        const profileData = await oneUser(userId);
        res.send({ ...profileData, password: null });
      } else {
        res.send({ error: "Please log in" });
      }
    } catch (err) {
      throw err;
    }
  });

  app.get("/api/opportunities", async (req,res)=>{
    try {
      const opportunityData = await getOpportunities();
      res.send(opportunityData);
    } catch (err){
      throw err;
    }
  })
}