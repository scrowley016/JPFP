"use strict";

const router = require("express").Router();
const Campus = require('../db/campus')
const Students= require('../db/student')

router.use('/students', require('./students'))
router.use('/campuses', require('./campuses'))

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
