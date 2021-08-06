const express = require("express")
const router = express.Router()

const { redirectToLogin } = require("./middleware")

// router.get("/", redirectToLogin, (req, res) => {
router.get("/", (req, res) => {
	res.render("pages/home", {
		name: req.session.firstname,
	})
})

module.exports = router

//push