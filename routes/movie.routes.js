const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

router.get("/:userId", (req, res, next) => {
  console.log(req.params);

  Movie.find({user: req.params.userId}).populate("user")
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


router.delete("/:id", (req, res, next) => {

  console.log(req.params.id);

  Movie.findByIdAndDelete(req.params.id)
  .then((unaddedMovie) => {
    res.json({success: true, result: unaddedMovie})
  })
  .catch((err) => {
    res.json({success: false, error: err})
  })
});

router.get("/details/:id", (req, res, next) => {

  console.log(req.params.id);

  Movie.findById(req.params.id)
  .then((movie) => {
    res.json({success: true, result: movie})
  })
  .catch((err) => {
    res.json({success: false, error: err})
  })
});

router.patch("/:id", (req, res, next) => {
  console.log(req.body);

  Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((updatedMovie) => {
      res.json({ success: true, result: updatedMovie });
    })
    .catch((err) => {
      res.json({ success: false, error: err });
    });
});


module.exports = router;
