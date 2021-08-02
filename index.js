const express = require("express")
const bcrypt = require('bcryptjs')
const db = require('./database')
const app = express()
const { restart } = require('nodemon')
const morgan = require('morgan')

//Router declarations
const homeRouter = require('./router/home')

//app.listen
const PORT = process.env.PORT || 3000

//body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Static folder
app.use(express.static('./public'))

//View Engine
app.set('view engine', 'ejs')
app.set('views', './views')

//Router middleware
app.use('/', homeRouter)

 //app.listen
 app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`)
})