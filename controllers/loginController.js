// var bodyParser = require("body-parser");
// var express = require("express");
// const con = require("../app");
// var router = express.Router();

// router.post("/", function (req, res) {
//   let inputname = req.body.name;
//   let inputpswd = req.body.ppwd;

//   const sqlSearch = "select * from user where pname = ?";
//   const search_query = mysql.format(sqlSearch, [pname])
//   con.connect();
//   await con.query (search_query, async (err, result) => {
//   con.release()
//   if (err) throw (err)
//   if (result.length == 0) {
//    console.log("--------> User does not exist")
//    res.sendStatus(404)
//   } 
//  // if (await compare


// //   //   if (input.name == uname) {
// //   //     // run fnctn to check from db
// //   //     // let uname = names from db
// //   //     // let upwd = password from db
// //   //     if (input.pswd == upwd) {
// //   //       console.log("Login Succesfull!!!");
// //   //     }
// //   //   } else {
// //   //     console.log("Check credentials and try again...");
// //   //   }
// // });

// // module.exports = router;
