const db = require("../database/db_connection");

const getOpportunities = () =>{
  return db.query("SELECT  * FROM  opportunities" );
};
  


const getSingleOpportunity = (userId) => {
    return db.query('SELECT * FROM opportunities WHERE id = $1', [userId])
    .then(opportunity => opportunity[0]);
  }


  module.exports={
      getOpportunities,
      getSingleOpportunity
  }