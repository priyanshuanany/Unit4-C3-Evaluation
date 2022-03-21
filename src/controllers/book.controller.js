const express = require("express");
const {body, validationResult} = require("express-validator");

const User = require("../models/book.model.js");

const router = express.Router();

router.post(

    body("likes")
    .isNumeric()
    .
)