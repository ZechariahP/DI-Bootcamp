const knex = require('knex')
require('dotenv').config()

const {PGHOST, PGUSER, PGPASSWORD, PGDATABASE, PGPORT, PROD} = process.env;

module.exports = {
    db: knex({
        client: 'pg',
        connection: {
            host: PGHOST,
            user: PGUSER,
            password: PGPASSWORD,
            database: PGDATABASE,
            port: PGPORT,
            ssl: PROD ? false : { rejectUnauthorized: false },
        }
    })
}