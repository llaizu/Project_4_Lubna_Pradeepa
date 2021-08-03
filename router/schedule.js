const express = require("express")
const router = express.Router()


router.get('/', (req,res)=>
{
    res.send("Add schedules")
})


module.export = router