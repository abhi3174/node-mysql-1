const Promise = require("bluebird");
const mysql = require("mysql");

// Promisify the mysql
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let readAllUser = async () => {
  try {
    console.log("I.AM.ABOUT.TO.READ.DB");

    // STEP::1 :: CONNECT WITH DATBASE USNG CREDENTIAL
    const connection = mysql.createConnection({
      host: "192.168.64.5",
      user: "mysql",
      password: "mysql",
      database: "DAC2020",
    });

    // connection.connect();  // normal method from mysql module
    await connection.connectAsync(); // because of bluebird :: Promisified method

    console.log("CONNECTION.SUCCESSFUL!!");

    await connection.endAsync();
  } catch (err) {
    console.log(err);
  }
};

readAllUser();
