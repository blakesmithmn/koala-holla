const { Router } = require('express');
const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool.js');

// GET


// POST


// PUT


// DELETE
koalaRouter.delete('/:idToDelete', (req,res)=>{
    console.log(req.params);
    let koalaid = req.params.idToDelete
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