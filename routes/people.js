const express = require("express")
const Router  = express.Router()

const mysqlConection = require("../conection")


Router.get("/", (req, res)=>{
    mysqlConection.query("SELECT * from people", (err, rows, fields) =>{
        if(!err){
            res.send(rows)
        }
        else{
            console.log(err)
        }
    })
})

 module.exports = Router