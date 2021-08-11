const express = require("express")
const router = express.Router()
const db = require('../database')
const { redirectToLogin } = require("./middleware")

router.get('/:id', redirectToLogin, (req,res)=>
{
	const id = req.params.id

	db.any(`select users.firstname, users.surname, schedules.day, schedules.starttime, schedules.endtime from users, schedules where users.id = schedules.user_id and users.id=$1;` ,[id])
	.then((schedules) => {
		console.log(schedules)
		res.render('pages/users',
			{
				users:schedules
			}
	)
})
.catch((error) => {
	console.log(error)
	res.render('pages/error' , {
	  message:"INVALID INPUT TRY AGAIN"
	})

 })
})

module.exports = router