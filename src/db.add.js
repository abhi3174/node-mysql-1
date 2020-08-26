const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
  host: "192.168.64.5",
  user: "mysql",
  password: "mysql",
  database: "DAC2020",
};

let addRecord = async () => {
  const connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();

  // LOGIC
  let sql =
    "INSERT INTO USER (USERNAME, PASSWORD, EMAIL, MOBILE) VALUES (?, ?, ?, ?)";
  let operation = await connection.queryAsync(sql, [
    "Shruti Jamdade",
    "12345",
    "shruti@gmail.com",
    "3456789012",
  ]);

  await connection.endAsync();
  return operation;
};

addRecord();
