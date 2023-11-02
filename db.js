const { Pool } = require("pg");

const pool = new Pool({
  user: "macbook",
  password: "Luda0703",
  host: "localhost",
  port: 5432,
  database: "node_postgres",
});

module.exports = pool;
