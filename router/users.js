const express = require("express")
const router = express.Router()


router.get('/', (req,res)=>
{
    res.render("pages/users", {
		firstname: req.query.firstname,
	})
})


module.exports = router