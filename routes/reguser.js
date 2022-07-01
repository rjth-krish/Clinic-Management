var express = require("express");
const con = require("../server");
var router = express.Router();

router.post("/", function (req, res) {
  let input = req.body;
  console.log(Object.values(input));
  // let quer =
  //   "SELECT drid,pid IF(input.id=drid || input.id==pid) FROM clinic_app.user";
  // if (quer) {
      var sql =
        "INSERT INTO clinic_app.dr (drid,drname,drpwd,specialization) VALUES (?,?,?,?)";
      con.query(sql, Object.values(input), (err, rows) => {
        if (err) throw err;
        else {
          res.send("reg succesfull");
        }
      });
  }
// }
);

module.exports = router;
