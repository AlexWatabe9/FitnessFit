const express = require('express');
const router = express.Router();
const mysql = require('mysql2/promise');

// MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Dismukes24!',
  database: 'fitness_db',
  connectionLimit: 10
});

// GET /fitness
router.get('/', async (req, res) => {
  try {
    // Retrieve fitness data from the database
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM fitness_data');
    connection.release();

    res.render('fitness', { data: rows });
  } catch (err) {
    console.error('Error: ', err);
    res.status(500).send('Server Error');
  }
});

// POST /fitness
router.post('/', async (req, res) => {
  const { date, workout, duration } = req.body;

  try {
    // Insert fitness data into the database
    const connection = await pool.getConnection();
    await connection.query('INSERT INTO fitness_data (date, workout, duration) VALUES (?, ?, ?)', [date, workout, duration]);
    connection.release();

    res.redirect('/fitness');
  } catch (err) {
    console.error('Error: ', err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
