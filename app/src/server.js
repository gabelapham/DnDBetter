import mysql from 'mysql';

var con = mysql.createConnection({
    host: "database-1.cmqlznpoxxy9.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "DnDisAwesome",
    port: 3306,
});

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM dndbetter.classes WHERE class = 'barbarian'", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});

const test = 10;