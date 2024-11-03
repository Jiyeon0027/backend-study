import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Zmfltl2813@@",
  database: "login_lecture",
});

db.connect();

export default db;
