const express = require("express");
const {body, validationResult} = require("express-validator");

const User = require("../models/user.model.js");

const router = express.Router();

router.post(

    body("firstName")
    .trim()
    .withMessage("Enter First Name")
    .isLength({min: 3, max: 30}),

    body("lastName")
    .trim()
    .isLength({min: 3, max:30}),

    body("age")
    .isNumeric()
    .custom((val) => {
        if(val < 3 || val > 150){
            throw new Error("Incorrect age ")
        }
        return true;
    }),

    body("email")
    .isEmail()
    .custom(async (value) => {
        const user = await User.findOne({email : value});

        if(user) {
            throw new Error("email is already there");
        }
        return true;
    }),

    
)