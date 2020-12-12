const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

async function connect() {
  if (global.connection && global.connection.state !== 'disconnected') {
    return global.connection;
  }

  const mysql = require("mysql2/promise");
  const connection = await mysql.createConnection(config);
  global.connection = connection;
  return connection;
}

async function createTable() {
  const conn = await connect();
  await conn.query(
    `create table if not exists people (
        id int(11) NOT NULL auto_increment,
        name varchar(255) not null,
        PRIMARY KEY (id)
    )`);
}

async function findPeoples() {
  const conn = await connect();
  const [rows] = await conn.query('SELECT * FROM people;');
  return rows;
}

async function insertPeople(people) {
  const conn = await connect();
  const sql = 'INSERT INTO people(name) VALUES (?);';
  const values = [people.name];
  await conn.query(sql, values);
}

module.exports = {createTable, findPeoples, insertPeople}
