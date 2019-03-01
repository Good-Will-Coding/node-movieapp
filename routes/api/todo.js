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

router.post("/", (req, res) => {
  // INSERT INTO db
  db.insert(req.body)
    .returning("*")
    .into("todo")
    .then(data => {
      res.send(data);
    });
});

module.exports = router;
