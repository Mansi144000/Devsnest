var express = require("express");
var router = express.Router();
const path = require("path");

/* GET users listing. */
router.get("/files/:name", function (req, res, next) {
  res.sendFile(path.join(__dirname, `../public/${req.params.name}`));
});

module.exports = router;
