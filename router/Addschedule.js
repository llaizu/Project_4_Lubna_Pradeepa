const express = require("express")
const router = express.Router()
const db = require('../database')

router.get('/', (req,res)=>
{
	db.any('SELECT * FROM schedules;')
	.then((schedules) => {
    res.render("pages/Addschedule", {
		//firstname: req.query.firstname,
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
  router.post('/Addschedule', (req, res) => {
	db.none('INSERT INTO schedules(username, day, start_at, end_at) VALUES ($1, $2, $3, $4);'
	,[req.body.firstname, req.body.day, req.body.starttime, req.body.endtime])
	.then(() => {
		res.redirect('pages/home')
	})
	 .catch((error) => {
   	res.render('pages/error', { 
     message: error.message
   })
	   
   })
	})
	
module.exports = router


