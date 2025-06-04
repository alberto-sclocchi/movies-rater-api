const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

router.get("/", (req, res, next) => {
  Movie.find()
  .then((movies) => {
    res.json({success: true, result: movies})
  })
  .catch((err) => {
    res.json({success: false, error: err})
  })
});

router.post("/", (req, res, next) => {

  Movie.create(req.body)
  .then((movie) => {
    res.json({success: true, result: movie})
  })
  .catch((err) => {
    res.json({success: false, error: err})
  })
});

module.exports = router;
