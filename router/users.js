const express = require("express")
const router = express.Router()


router.get('/', (req,res)=>
{
    res.send("All users")
})


module.export = router