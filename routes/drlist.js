var express = require("express");
const con = require("../server");
var router = express.Router();

router.get("/", function (req, res) {
  con.query("SELECT drname FROM clinic_app.dr", (err, rows) => {
    if (err) throw err;
    else {
      res.send(rows);
    }
  });
});

module.exports = router;
