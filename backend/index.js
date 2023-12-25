const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "hospital_db",
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  const sqlQuery = "SELECT * FROM patients";
  db.query(sqlQuery, (err, result) => {
    if(err) return res.send(err);
    return res.status(200).json(result);
  });
});

app.post("/api/patients", (req, res) => {
  console.log(req.body);
  const { first_name } = req.body;
  const { last_name } = req.body;
  const { age } = req.body;
  const { gender }  = req.body;
  const sqlQuery = `INSERT INTO patients ( first_name, last_name, age, gender )
    VALUES ( ?, ?, ?, ? )`;
  
  db.query(sqlQuery,
    [
      first_name,
      last_name,
      age,
      gender
    ], (err, result) => {
    if(err) return res.send(err);
    return res.status(200).json(result);
  });
});

app.put("/api/edit/:id", (req, res) => {
  const { first_name } = req.body;
  const { last_name } = req.body;
  const { age } = req.body;
  const { gender }  = req.body;
  const sqlQuery = `
    UPDATE patients
      SET
        first_name = ?, last_name = ?, age = ?, gender = ?
    WHERE id = ?
  `;

  db.query(sqlQuery,
    [
      first_name,
      last_name,
      age,
      gender,
    ], (err, result) => {
    if(err) return res.send(err);
    return res.status(200).json(result);
  })
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});