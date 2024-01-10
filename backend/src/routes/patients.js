const express = require('express');
const db = require('../db/connection');

const router = express.Router();

router.get("/", (req, res) => {
  const sqlQueryPatients = `SELECT * FROM patients;`;

  db.query(sqlQueryPatients, (err, result) => {
    if (err) {
      return res.status(500).json({ err: "Internal Server Error" });
    }
    return res.status(200).json(result);
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const sqlQuery = `
    SELECT * FROM patients
    WHERE id = ?
  `;

  db.query(sqlQuery, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.status(200).json(result);
  });
});

router.post("/", (req, res) => {
  const { first_name, last_name, birth_date, gender, status_active, document } = req.body;
  const sqlQuery = `
    INSERT INTO patients (first_name, last_name, birth_date, gender, status_active, document)
    VALUES (?, ?, ?, ?, ?, ?);`;

  db.query(sqlQuery, [first_name, last_name, birth_date, gender, status_active, document], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.status(200).json(result);
  });
});

router.put("/edit/:id", (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, birth_date, gender, status_active, document } = req.body;
  const sqlQuery = `
    UPDATE patients
    SET first_name = ?, last_name = ?, birth_date = ?, gender = ?, status_active = ?, document = ?
    WHERE id = ?
  `;

  db.query(sqlQuery, [first_name, last_name, birth_date, gender, status_active, document, id], (err, result) => {
    if (err) {
      return res.status(500).json( err.message );
    }
    return res.status(200).json(result);
  });
});

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const sqlQuery = "DELETE FROM patients WHERE id = ?";

  db.query(sqlQuery, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.status(200).json(result);
  });
});

module.exports = router;
