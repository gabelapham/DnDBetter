//import mysql from 'mysql';
/*
//export function conFunc() {
var con = mysql.createConnection({
    host: "database-1.cmqlznpoxxy9.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "DnDisAwesome",
    port: 3306,
});

con.connect(function (err) {
    if (err) throw err;
});
//}

//export function testFunc() {
    con.query("SELECT * FROM dndbetter.classes WHERE class = 'barbarian'", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
//}
//conFunc();
//testFunc();
*/

const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "https://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const db = require("./models/index.cjs")
db.sequelize.sync({force: true}).then(() => {
    console.log("Drop and re-sync db.")
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my app."})
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})