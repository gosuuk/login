const mysql = require("mysql");

const db = mysql.createConnection({
  host: '',
  user: "tjddnr",
  password: "",
  datebase: "login_lectuer",
});

db.connect();

module.exports = db;