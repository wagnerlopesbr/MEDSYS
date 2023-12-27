const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
const port = 3001;
const lists = require("./routes/lists");
const db = require("./db/connection");

app.use(cors());
app.use(express.json());

app.use("/lists", lists);

app.get("/", (req, res) => {
  const sqlQuery = "SELECT * FROM patients";
  db.query(sqlQuery, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.status(200).json(result);
  });
});

app.post("/api/patients", (req, res) => {
  const { first_name, last_name, age, gender } = req.body;
  const sqlQuery = `
    INSERT INTO patients (first_name, last_name, age, gender)
    VALUES (?, ?, ?, ?)`;

  db.query(sqlQuery, [first_name, last_name, age, gender], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.status(200).json(result);
  });
});

app.put("/api/edit/:id", (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, age, gender } = req.body;
  const sqlQuery = `
    UPDATE patients
    SET first_name = ?, last_name = ?, age = ?, gender = ?
    WHERE id = ?
  `;

  db.query(sqlQuery, [first_name, last_name, age, gender, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.status(200).json(result);
  });
});

app.delete("/api/delete/:id", (req, res) => {
  const { id } = req.params;
  const sqlQuery = "DELETE FROM patients WHERE id = ?";

  db.query(sqlQuery, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.status(200).json(result);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
