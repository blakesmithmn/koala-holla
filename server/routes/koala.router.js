const { Router } = require('express');
const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool.js');

// GET


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


// DELETE

module.exports = koalaRouter;