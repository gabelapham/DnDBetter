const {createPool} = require('mysql')

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