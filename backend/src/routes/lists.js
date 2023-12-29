const express = require('express');
const db = require('../db/connection');

const router = express.Router();

router.get("/", (req, res) => {
  const jsonObj = {};
  const sqlQueryUsers = `SELECT * FROM users;`;
  const sqlQueryPatients = `SELECT * FROM patients;`;
  const sqlQueryDoctors = `SELECT * FROM doctors;`;

  const getUsers = new Promise((resolve, reject) => {
    try {
      db.query(sqlQueryUsers, (_err, result) => {
        jsonObj.users = result;
        resolve();
      });
    } catch (err) {
      return res.status(500).json({ err: "Internal Server Error" })
    }
  });

  const getPatients = new Promise((resolve, reject) => {
    try {
      db.query(sqlQueryPatients, (_err, result) => {
        jsonObj.patients = result;
        resolve();
      });
    } catch (err) {
      return res.status(500).json({ err: "Internal Server Error" })
    }
  });

  const getDoctors = new Promise((resolve, reject) => {
    try {
      db.query(sqlQueryDoctors, (_err, result) => {
        jsonObj.doctors = result;
        resolve();
      });
    } catch (err) {
      return res.status(500).json({ err: "Internal Server Error" })
    }
  });

  Promise.all([getUsers, getPatients, getDoctors])
    .then(() => {
      res.status(200).json(jsonObj);
    })
    .catch((err) => {
      res.status(500).json({ err: "Internal Server Error" })
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