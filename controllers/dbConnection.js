const knex = require("knex");

const allKnexConfigs = require("../knexfile");

const knexConfig = allKnexConfigs[process.env.NODE_ENV || "development"];

const dbConnection = knex(knexConfig);

module.exports = dbConnection;
