const redirectToLogin = (req, res, next) => {
    if(!req.session.user_id)
    {
        console.log("Not logged in, go back to /login")
        res.clearCookie("coffee_sid")
        res.redirect("/login")
    }
    else{
        next()
    }
}

const redirectToHome = (req, res, next) => {
    if(req.session.user_id)
    {
        console.log("Already logged in, redirecting to /home")
        res.redirect("/home")
    }
    else{
        next()
    }   
}

module.exports = { redirectToLogin, redirectToHome }