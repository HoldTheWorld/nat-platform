const {Sequelize} = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASS, {
  host: 'localhost',
  dialect: 'postgres',
  }); 

//test connection to db 
  async function  testBD() {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  testBD();

  async function closeConnection() {
    try {
      await sequelize.close();
      console.log('connection closed');
    } catch (err) {
      console.error('unable to close', err);
    }
  }
  // closeConnection()

  module.exports = sequelize;
