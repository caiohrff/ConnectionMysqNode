const mysql = require("mysql")
const express = require ("express")
const bodyParser = require("body-parser")
const mysqlConection = require("./conection")
const PeopleRoutes = require("./routes/people") 

const app = express()

app.use(bodyParser.json())

app.use("/people", PeopleRoutes)



app.listen(3000)
