const db = require("../database/db_connection");

const getUser = email =>
  db
    .query(`SELECT * FROM users WHERE email = $1`, [email])
    .then(res => res[0])
    .catch(err => console.log("check user err: ", err));

const addUser = data =>
  db.query(
    `INSERT INTO users (name, email, password ) VALUES ($1, $2, $3) RETURNING *`,
    [
      data.name,
      data.email,
      data.password,
     
    ]
  );

  const oneUser = id =>
  db
    .query(`SELECT * FROM users WHERE id = $1`, [id])
    .then(res => res[0])
    .catch(err => console.log("one user query err: ", err));



module.exports = {
  getUser,
  addUser,
  oneUser
 
};