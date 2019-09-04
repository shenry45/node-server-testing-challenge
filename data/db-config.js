const knex = require('knex');

const config = require('../knexfile.js');

// not being read by config syntax
// const dbEnv = `${process.env.DB_ENV}` || 'testing';
// module.exports = knex(config[dbEnv]);

module.exports = knex(config.testing);