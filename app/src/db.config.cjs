module.exports = {
    host: "database-1.cmqlznpoxxy9.us-east-2.rds.amazonaws.com",
    port: "3306",
    user: "admin",
    password: "DnDisAwesome",
    db: "test",
    dialect: "mysql",

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
}

/*const {createPool} = require('mysql')

const pool = createPool({
    host: "database-1.cmqlznpoxxy9.us-east-2.rds.amazonaws.com",
    port: "3306",
    user: "admin",
    password: "DnDisAwesome",
    connectionLimit: 10
})

pool.query(`select * from dndbetter.classes`, (err, res)=>{
    return console.log(res)
}) 

export const test = 10;

function MySqlConnect() {
    var mysql = require('mysql')

    var con = mysql.createConnection({
        host: "database-1.cmqlznpoxxy9.us-east-2.rds.amazonaws.com",
        port: "3306",
        user: "admin",
        password: "DnDisAwesome"
    });

    con.connect(function(err) {
        if (err) throw err
        console.log("Connected!")
    });
}*/