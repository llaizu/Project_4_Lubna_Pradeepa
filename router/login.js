const express = require("express")
const router = express.Router()
//Encryption
const bcrypt = require("bcryptjs")
const saltRounds = 5
//Database Setup
const db = require("../database")
const { redirectToHome } = require("./middleware")
router.get('/', (req,res)=>
// router.get('/', redirectToHome, (req,res)=>
{
    res.render('pages/login', {
        message : req.query.message,
    })
})
router.post('/', (req,res) =>
{
    console.log("email: " + req.body.email)
    console.log("password: " + req.body.password)
    db.oneOrNone("SELECT * from users where email_address = $1;", [req.body.email])
    .then((result) => {
        //if no result, then returns to login page
if (!result)
    {
        res.redirect("/login?message=Email not found")
    }
    else
    {
    const hash = result.password
    bcrypt.compare(req.body.password, hash, function (err, bcryptResult)
    {
         if(bcryptResult)
       {
        req.session.firstname = result.firstname
        req.session.user_id = result.id
        res.redirect(`/home`)
       }
      else 
        {
        //the password does not match, send back
        res.redirect("/login?message=Incorrect password")
        }
})
    }
    })
.catch((err) => 
    {
    res.redirect(`/login?message=${err}`)
    })
})
module.exports = router
