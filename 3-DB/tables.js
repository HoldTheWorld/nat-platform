const db = require('./db/connections');

async function createTables() {
  try {
    await db.query(`
    CREATE TABLE IF NOT EXISTS departments (
      id SERIAL PRIMARY KEY,
      name VARCHAR(30) NOT NULL,
      specialisation VARCHAR(30) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS workers (
      id SERIAL PRIMARY KEY,
      name VARCHAR(30) NOT NULL,
      dep_id INTEGER REFERENCES departments (id) ON DELETE CASCADE
    );
    `)
  } catch(err) {
   console.log(err);
  }
}
//  createTables()

async function dropper() {
  await db.query(`
  DROP TABLE IF EXISTS departments;
  DROP TABLE IF EXISTS workers;
  DROP TABLE IF EXISTS horses;
  `)
}
// dropper()

