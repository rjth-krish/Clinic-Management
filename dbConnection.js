const mysql = require("mysql");

const con = mysql.createConnection({
  host: "192.168.1.213",
  user: "root",
  password: "Rjth@1097",
  database: "clinic_app",
});

con.connect((err) => {
  if (err) {
    console.log("Error in Connection!!!");
    console.log(err);
    return;
  }
  console.log("Connection established");
});

//con.end((err) => {});
