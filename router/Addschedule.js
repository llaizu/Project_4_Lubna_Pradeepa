const express = require("express")
const router = express.Router()
const db = require('../database')

router.get('/', (req,res)=>
{
	db.any('SELECT * FROM schedules;')
	.then((schedules) => {
    res.render("pages/addschedule", {
		firstname: req.session.firstname ,
		schedules: schedules
	})
})
.catch((error) => {
	console.log(error)
	 res.render('pages/error' , {
	message:"INVALID INPUT TRY AGAIN"
	})
  
   })
  })

router.post('/', (req, res) => {
    db.none('INSERT INTO schedules(day, starttime, endtime) VALUES ($1, $2, $3);'
    ,[req.body.day, req.body.starttime, req.body.endtime])
    .then(() => {
        res.redirect('/addschedule')
    })
     .catch((error) => {
   console.log(error)  
   })
    })
module.exports = router



