const db = require("../database/dbConfig");

module.exports = {
  findBy,
  findById,
  insert
};

async function insert(user) {
  const [id] = await db("users").insert(user);
  return findById(id);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function findBy(filter) {
  return db("users").where(filter);
}