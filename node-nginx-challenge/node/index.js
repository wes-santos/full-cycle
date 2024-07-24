const express = require('express');
const app = express();
const port = 3000;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};
const mysql = require('mysql');
const conn = mysql.createConnection(config);
conn.connect();

const create_table_query = `
  CREATE TABLE IF NOT EXISTS people(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255),
    primary key (id)
  );
`;

conn.query(create_table_query);

const insert_name_query = `
  INSERT INTO people (id, name) VALUES (1, 'Weslley');
`;
conn.query(insert_name_query);

app.get('/', (_, res) => {
  const query = `SELECT name FROM people`;

  let base_message = "<h1>Full Cycle Rocks!</h1>"

  conn.query(query, function (err, result, fields) {
    if (err) throw err;
    if (result) {
      const result_from_db = result.map((x) => `<li>${x.name}</li>`).join("")
      res.send(base_message + "<ul>" + result_from_db + "</ul>")
    } else {
      res.send(base_message)
    }
  });
});

app.listen(port, () => {
  console.log("Up and running on port " + port)
});

process.on('exit', () => {
  conn.end();
});