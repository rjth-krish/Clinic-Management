const express = require("express");
const app = express();

const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
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

module.exports = con;
