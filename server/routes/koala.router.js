const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool.js');

// GET
koalaRouter.get('/', (req, res) => {
    // How can we ask the creatures table for creatures?
    const sqlQuery = `
      SELECT * FROM residents
        ORDER BY "id";
    `
db.query(sqlQuery)
    .then((dbRes) => {
    let theResidents = dbRes.rows;
    res.send(theResidents);
})
    .catch((dbErr) => {
    console.log('db query in GET /koalas failed:', dbErr);
    res.sendStatus(500);
    })
  })

// POST


// PUT


// DELETE

module.exports = koalaRouter;