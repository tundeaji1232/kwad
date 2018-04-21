
const bcrypt = require("bcrypt-nodejs");

const hashPassword = password =>
  new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        reject(err);
      } else {
        resolve(hash);
      }
    });
  });

const generatePassword = () => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let randomPassword = "";
  for (let i = 0; i < 6; i++) {
    randomPassword += letters.charAt(
      Math.floor(Math.random() * letters.length)
    );
  }
  return randomPassword;
};

const comparePassword = (candidatePassword, user) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
      if (err) reject(err.message);
      resolve({ isMatch, user });
    });
  });
};


// const validate = (password, userData,username) =>
//   new Promise((resolve, reject) => {
//     if (userData) {
//       bcrypt.compare(password, userData.password, (err, res) => {
//         if (err) {
//           reject(err);
//         } else if (res) {
//           resolve(true);
//         } else {
//           reject("Wrong password!");
//         }
//       });
//     } else {
//       reject(
//         "Oops" + userData[0].username + "You do not have an account."
//       );
//     }
//   });

module.exports = { hashPassword, generatePassword, comparePassword };