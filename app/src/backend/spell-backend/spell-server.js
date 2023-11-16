import express from "express"
// import mysql from "mysql"
import mysql from "mysql2/promise"
import cors from "cors"


const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createPool({
    host: "database-1.cmqlznpoxxy9.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "DnDisAwesome",
    database: "dndbetter",
    waitForConnections: true,
});


//routers
import router from "./spell-router.js"

app.use('/bardSpell', router)
app.use('/clericSpell', router)
app.use('/druidSpell', router)
app.use('/paladinSpell', router)
app.use('/rangerSpell', router)


//test api
app.get('/', (req, res) => {
    res.send('hello world');
})

//set api endpoint for getting bardSpell datas
// app.get("/bardSpell", async (req, res)=>{
//     try{
//         const [rows, fields] = await db.query('SELECT * FROM bardSpell');
//         res.json(rows);
//     }catch (error){
//         console.error('Error: ', error.message);
//         res.status(500).json({error: 'Internal Server Error'});
//     }
// });



app.listen(3001, () => {
    console.log("running on port 3001");
});
