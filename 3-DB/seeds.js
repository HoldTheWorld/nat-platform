const db = require('./db/connections');

const workers = [
  ['Ivan Ivanov', 2],
  ['Irina Petrova', 2],
  ['Sergey Sergeev', 1],
  ['Svetlana Ivanova', 1],
  ['Denis Denisov', 3],
  ['Oksana Sergeeva', 3]
];

const departments = [
  ['IT', 'informational technologies'],
  ['QA', 'quality assurance '],
  ['HR', 'human resources']
];

const addDepartments = async () => {
  try {
    db.query(`
    INSERT INTO departments (name, specialization) VALUES ?;
    `, {
      replacements: [departments]
    })
  } catch (err) {
    console.log(err);
  }
}
// addDepartments(); 

const addWorkers = async () => {
  try {
    db.query(`
    INSERT INTO workers (name, dep_id) VALUES ?;
    `, {
      replacements: [workers]
    })
  } catch (err) {
    console.log(err);
  }
}
// addWorkers(); 

const clearDB = async () => {
  try {
    db.query(`
    DELETE FROM workers;
    `)
    db.query(`
    DELETE FROM departments;
    `)
  } catch (err) {
    console.log(err);
  }
}
// clearDB()
