

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bookdb', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.books = require('./book_shcema')(sequelize, Sequelize);

module.exports = db;
