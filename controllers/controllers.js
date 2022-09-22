const knex = require("./dbConnection");

function createUser(username, passwordHash) {
  return knex("users")
    .insert({ username, passwordHash })
    .then((data) => data);
}

function getPasswordHashForUser(username) {
  return knex("users")
    .where({ username })
    .select(`passwordHash`)
    .then((data) => data[0].passwordHash);
}

module.exports = { createUser, getPasswordHashForUser };
