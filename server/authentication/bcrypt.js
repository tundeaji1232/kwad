const bcrypt = require("bcrypt");

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

const validate = (password, userData,username) =>
  new Promise((resolve, reject) => {
    if (userData) {
      bcrypt.compare(password, userData.password, (err, res) => {
        if (err) {
          reject(err);
        } else if (res) {
          resolve(true);
        } else {
          reject("Wrong password!");
        }
      });
    } else {
      reject(
        "Oops" + username + "You do not have an account."
      );
    }
  });

module.exports = { hashPassword, generatePassword, validate };