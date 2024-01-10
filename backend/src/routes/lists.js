const express = require('express');
const db = require('../db/connection');

const router = express.Router();

router.get("/", (req, res) => {
  const jsonObj = {};
  const sqlQueryUsers = `SELECT user, user_type_id as 'user type' FROM system_users;`;
  const sqlQueryPatients = `
    SELECT
      id,
      first_name,
      last_name,
      gender,
      birth_date,
      FLOOR(DATEDIFF(CURDATE(), patients.birth_date) / 365.25) as 'age',
      status_active,
      document
    FROM patients;`;
  const sqlQueryEmployees = `
    SELECT
      employees.id,
      employees.first_name,
      employees.last_name,
      employees.gender,
      FLOOR(DATEDIFF(CURDATE(), employees.birth_date) / 365.25) as 'age',
      roles.name as 'role',
      specialties.name as 'specialty',
      crews.name as 'crew name'
    FROM employees
    JOIN crews ON employees.crew_id = crews.id
    JOIN roles ON employees.role_id = roles.id
    JOIN specialties ON employees.specialty_id = specialties.id
    ORDER BY employees.id;  
  `;
  const sqlQuerySectors = `SELECT
    sectors.name as name, JSON_ARRAYAGG(JSON_OBJECT('id', rooms.id, 'room_name', rooms.room_name)) as rooms
    FROM
      sectors
    JOIN
      rooms ON sectors.id = rooms.sector_id
    GROUP BY
      sectors.id, sectors.name
    ORDER BY
      sectors.id;`
  const sqlQueryRooms = `SELECT * FROM rooms;`;
  const sqlQuerySpecialties = `SELECT * FROM specialties;`;
  const sqlQueryRoles = `SELECT * FROM roles;`;

  const getRooms = new Promise((resolve, reject) => {
    try {
      db.query(sqlQueryRooms, (_err, result) => {
        jsonObj.rooms = result;
        resolve();
      });
    } catch (err) {
      return res.status(500).json({ err: "Internal Server Error" })
    }
  });

  const getSpecialties = new Promise((resolve, reject) => {
    try {
      db.query(sqlQuerySpecialties, (_err, result) => {
        jsonObj.specialties = result;
        resolve();
      });
    } catch (err) {
      return res.status(500).json({ err: "Internal Server Error" })
    }
  });

  const getRoles = new Promise((resolve, reject) => {
    try {
      db.query(sqlQueryRoles, (_err, result) => {
        jsonObj.roles = result;
        resolve();
      });
    } catch (err) {
      return res.status(500).json({ err: "Internal Server Error" })
    }
  });

  const getSectors = new Promise((resolve, reject) => {
    try {
      db.query(sqlQuerySectors, (_err, result) => {
        jsonObj.sectors = result;
        resolve();
      });
    } catch (err) {
      return res.status(500).json({ err: "Internal Server Error" })
    }
  });

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

  const getEmployees = new Promise((resolve, reject) => {
    try {
      db.query(sqlQueryEmployees, (_err, result) => {
        jsonObj.employees = result;
        resolve();
      });
    } catch (err) {
      return res.status(500).json({ err: "Internal Server Error" })
    }
  });

  Promise.all([getUsers, getPatients, getEmployees, getSectors, getRooms, getSpecialties, getRoles])
    .then(() => {
      res.status(200).json(jsonObj);
    })
    .catch((err) => {
      res.status(500).json({ err: "Internal Server Error" })
    });
});

module.exports = router;