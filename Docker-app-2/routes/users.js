var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  let employees = [
    { id: 1, name: "Mohib" },
    { id: 2, name: "Korin" },
    { id: 3, name: "Rohim" }
  ]
  res.send(employees);
});

module.exports = router;
