// Import pg node module:
const pg = require('pg');

// Persistent connection to a database:
const Pool = pg.Pool;

const host = "koalas";
const database = "localhost";

// how DB connection is created/configured
const pool = new Pool ({
    database: host,
    host: database
})

pool.on('connect', ()=> {
    console.log(`Successfully connected to ${host} ${database}`);
})

pool.on('error', ()=> {
    console.log(`Failed to connect to ${host} ${database}`, error);
})

// Export DB connection:
module.exports = pool;