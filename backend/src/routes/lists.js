const express = require('express');
const db = require('../db/connection');

const router = express.Router();

router.get("/", (req, res) => {
  const jsonObj = {};
  const sqlQueryPatients = `
  SELECT * FROM patients;
  `;
  const sqlQueryDoctors = `
  SELECT * FROM doctors;
  `;

  db.query(sqlQueryPatients, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
    jsonObj.patients = result;
  });

  db.query(sqlQueryDoctors, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
    jsonObj.doctors = result;
    res.status(200).json(jsonObj);
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

module.exports = router;