const mysql = require("mysql2");

module.exports = db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "hospital_db",
});