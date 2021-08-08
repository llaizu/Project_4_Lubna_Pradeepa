const express = require("express")
const router = express.Router()
const db = require('../database')

const { redirectToLogin } = require("./middleware")

// router.get("/", redirectToLogin, (req, res) => {
router.get("/", (req, res) => {
	//db.any('SELECT * FROM schedules;')
	db.any('select users.firstname,users.surname,schedules.day,schedules.starttime,schedules.endtime from users, schedules where users.id = schedules.user_id;')

	.then((schedules) => {
  
	  //console.log(schedules)
	 //res.send(schedules)
   
	 //res.send(error)
	 res.render('pages/home' , {
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
  
module.exports = router

//select users.firstname, users.lastname, schedules.day, schedules.start_at, schedules.end_at 
//from users, schedules
//where users.id = schedules.user_id
//and users.id =1