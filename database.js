const pgp = require('pg-promise')();
const username = 'postgres'
const password = 'lubnapradeepa'
const host = 'localhost'
const port = 5432
const database = 'coffee'
const connection = `postgres://${username}:${password}@${host}:${port}/${database}`
const db = pgp (connection)
module.exports = db