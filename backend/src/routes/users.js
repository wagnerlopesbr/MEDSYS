const express = require('express');
const db = require('../db/connection');

const router = express.Router();

router.get("/", (req, res) => {
  const sqlQueryUsers = `SELECT user, user_type_id as 'user type', email FROM system_users;`;

  db.query(sqlQueryUsers, (err, result) => {
    if (err) {
      return res.status(500).json({ err: "Internal Server Error" });
    }
    return res.status(200).json(result);
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const sqlQuery = `
    SELECT * FROM system_users
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
