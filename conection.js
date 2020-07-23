const mysql = require("mysql")

const mysqlConection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "Edureka",
    multipleStatements: true 
})


mysqlConection.connect((err)=>{
    if(!err)
    {
        console.log("Conectado")
    }
    else
    {
        console.log(err)

        console.log("Conexão falhou")
    }
})

module.exports = mysqlConection