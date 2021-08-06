const express = require("express")
const router = express.Router()

//Encryption
const bcrypt = require("bcryptjs")
const saltRounds = 5

//Database Setup
const db = require("../database")

router.get('/', (req,res)=>
{
    res.render('pages/login', {
        message : req.query.message,
    })
})

module.exports = router