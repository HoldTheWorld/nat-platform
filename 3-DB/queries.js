const db = require('./db/connections');

async function view1() {
  try {
    const [result] = await db.query(`
    SELECT workers.name AS worker_name, departments.specialisation FROM workers
    JOIN departments ON departments.id = workers.dep_id
    `)
    console.log(result);
  } catch(err) {
    console.log(err);
  }
}

view1()
