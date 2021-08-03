const pgp = require('pg-promise')();
const username = process.env.PG_USER || "postgres"
const password = process.env.PG_PASSWORD ||'lianabishoy2'
const host = process.env.PG_HOST ||'localhost'
const port = process.env.PG_PORT || 5432
const database = 'coffee'
const connection = `postgres://${username}:${password}@${host}:${port}/${database}`
const db = pgp (connection)
module.exports = db