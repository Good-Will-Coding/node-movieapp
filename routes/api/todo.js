const express = require("express");
const router = express.Router();
const db = require("../../database");

router.get("/", (req, res) => {
  // to execute query, use .then
  db.select()
    .from("todo")
    .then(data => {
      res.send(data);
    });
});

module.exports = router;
