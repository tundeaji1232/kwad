const db = require("../database/db_connection");

const getUser = email =>
  db
    .query(`SELECT * FROM users WHERE email = $1`, [email])
    .then(res => res[0])
    .catch(err => console.log("check user err: ", err));

const addUser = data =>
  db.query(
    `INSERT INTO users (username, email, password ) VALUES ($1, $2, $3) RETURNING *`,
    [
      data.username,
      data.email,
      data.password,
     
    ]
  );



module.exports = {
  getUser,
  addUser
 
};