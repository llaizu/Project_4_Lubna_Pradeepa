const express = require("express")
const router = express.Router()

router.get('/login', (req, res) =>
{
    res.render("pages/login")
})
router.post('/login', (req,res) =>
{
    console.log("email: " + req.body.email)
    console.log("password: " +req.body.password)
})

module.exports = router