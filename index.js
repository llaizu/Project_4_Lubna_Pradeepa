const express = require("express")
const bcrypt = require('bcryptjs')
const app = express()
const { restart } = require('nodemon')
const morgan = require('morgan')
require('dotenv').config()
const db = require('./database')

//Router declarations
const homeRouter = require('./router/home')
const usersRouter = require('./router/users')
const signupRouter = require('./router/signup')
const loginRouter = require('./router/login')
const logoutRouter = require('./router/logout')
const addScheduleRouter = require('./router/addschedule')


//app.listen
const PORT = process.env.PORT || 3001

//body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//session
const session = require("express-session")
const threehours = 1000 * 60 * 60 * 3
app.use(
    session({
        name: "coffee_sid",
        secret: process.env.SESSION_SECRET, //encrypting any secret
        saveUninitialized: false, /* forces a session that is "ininitialized" toi be saved to the store. */
        cookie: { maxAge: threehours },
        resave: false /*Forces the session to be saved back to the session store, even if the session was never modified */
    })
)

//Static folder
app.use(express.static('./public'))

//View Engine
app.set('view engine', 'ejs')
app.set('views', './views')

//Router middleware
app.use('/signup', signupRouter)
app.use('/home', homeRouter)
app.use('/users', usersRouter)
app.use('/login', loginRouter)
app.use('/', signupRouter)
app.use('/logout', logoutRouter)
app.use('/addschedule', addScheduleRouter)

 //app.listen
 app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`)
})