const mysql = require("mysql");
const { promisify } = require('util');

var sqlConnecion = mysql.createConnection({
    host:"database-1.cydyken3ime7.us-west-1.rds.amazonaws.com",
    user:"admin",
    password:"password",
    database:"mydb" 
});

sqlConnecion.connect(function(err){
    if(err){
        console.log(err.message);
    }
    else{
        console.log("Successful Connection");
    }

});

sqlConnecion.query = promisify(sqlConnecion.query)

module.exports = sqlConnecion;