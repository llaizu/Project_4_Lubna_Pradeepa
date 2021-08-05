const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const saltRounds = 5

const db = require("../database")

router.get("/", (req, res) => {
	res.render("pages/signup", {
		message: req.query.message,
	})
})

    router.post('/', (req,res)=>{
    console.log("firstname: " + req.body.firstname)
	console.log("lastname: " + req.body.lastname)
	console.log("email: " + req.body.email)
	var encPassword = bcrypt.hashSync(req.body.password, saltRounds)
	console.log("password: " + encPassword)
  
            
        
        db.any("SELECT firstname from users where email = $1;", [req.body.email]).then((firstname) => {
            if (firstname.length > 0) {
             
                res.redirect("/signup?message=User already exists")
            } else {
                db.any(
                    "INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4);",
                    [req.body.firstname, req.body.lastname, req.body.email, encPassword]
                )
                    .then(() => {
                        res.redirect("/home?firstname="+ req.body.firstname)
                    })
                    .catch((err) => {
                        res.redirect("/signup?message="+ err)
                    })
            }
        })
    
    })
  


module.exports = router