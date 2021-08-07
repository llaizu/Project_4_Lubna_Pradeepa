const express = require("express")
const router = express.Router()
const db = require('../database')

const { redirectToLogin } = require("./middleware")

// router.get("/", redirectToLogin, (req, res) => {
router.get("/", (req, res) => {
	db.any('SELECT * FROM schedules;')

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


////-----Display home page
//app.get('/' , (req, res) => { 

	//db.any('SELECT * FROM schedules;')
  
	//.then((schedules) => {
  
	 
	 //res.send(error)
	 //res.render('Pages/home' , {
	//  schedules: schedules
  
  //})
  
//	})
	
	//.catch((error) => {
	//  console.log(error)
	// res.render('Pages/error' , {
	//	message:"INVALID INPUT TRY AGAIN"
	//  })
  
  // })
 // })
  
  //-----Display new page
  
 // app.get('/new' ,(req, res) => {
//	db.any('SELECT * FROM schedules;')
  
//	.then((schedules) => {
//	 res.render('Pages/new' , {
	//   schedules: schedules
  
 // })
  
//	})
	
//	.catch((error) => {
	//  console.log(error)
	//  res.render('Pages/error' , {
	//	message:"INVALID INPUT TRY AGAIN"
	//  })
  
   //})
  //})
   //-----------------POST-------
  //app.post('/new', (req, res) => {
  
	
  //db.none('INSERT INTO schedules(username, day, start_at, end_at) VALUES ($1, $2, $3, $4);'
  //,[req.body.username, req.body.day, req.body.start_at, req.body.end_at])
 // .then(() => {
//	res.redirect('/')
  
 // })
  //.catch((error) => {
	//res.render('Pages/error', { 
//	  message: error.message
	//})
	
//	})
 // })