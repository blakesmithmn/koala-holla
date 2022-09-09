const { Router } = require('express');
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
pool.query(sqlQuery)
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
koalaRouter.post('/', (req, res) => {
    let newResident =  req.body;
    console.log('Adding new resident:', newResident);
    let queryText = `
        INSERT INTO "residents" ("name", "age", "gender", "transfer", "notes")
            VALUES ($1, $2, $3, $4, $5);
    `;
    pool.query(queryText, [newResident.name, newResident.age, newResident.gender, newResident.transfer, newResident.notes])
        .then((postResponse) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('Error adding new resident:', error);
            res.sendStatus(500);
        });
})

// PUT


// DELETE again
koalaRouter.delete('/:idToDelete', (req,res)=>{
    console.log(req.params);
    let koalaid = req.params.idToDelete;
    console.log(koalaid);

    const sqlQuery = `
        DELETE FROM "koalas"
            WHERE "id"=$1;
    `

    const sqlValues = [koalaid];

    pool.query(sqlQuery, sqlValues)
        .then((poolRes)=>{
            res.sendStatus(200);
        })
        .catch((poolErr)=>{
            console.log('delete is broken', poolErr);
        })
})

module.exports = koalaRouter;