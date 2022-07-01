var express = require("express");
const con = require("../server");

var router = express.Router();

router.get("/:id", function (req, res) {
  console.log(req.params.id);
  let quer =
    "SELECT drname,specialization,conshrs FROM clinic_app.dr WHERE drid ={id}";
  quer = quer.replace("{id}", req.params.id);
  console.log(quer);
  con.query(quer, (err, rows) => {
    if (err) throw err;
    else {
      res.send(rows);
    }
  });
});

module.exports = router;
