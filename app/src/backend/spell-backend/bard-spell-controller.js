import mysql from 'mysql2/promise';

const db = mysql.createPool({
    host: "database-1.cmqlznpoxxy9.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "DnDisAwesome",
    database: "dndbetter",
    waitForConnections: true,
});


const getAll = (async (req, res)=>{
    try{
        const [rows, fields] = await db.query('SELECT * FROM bardSpell');
        res.json(rows);
    }catch (error){
        console.error('Error: ', error.message);
        res.status(500).json({error: 'Internal Server Error'});
    }
});


const getAllByName = (async (req, res)=>{
    try{
        const [rows, fields] = await db.query('SELECT * FROM bardSpell');
        res.json(rows);
    }catch (error){
        console.error('Error: ', error.message);
        res.status(500).json({error: 'Internal Server Error'});
    }
});


const getAllByAttribute = (async (req, res)=>{
    try{
        const [rows, fields] = await db.query('SELECT * FROM bardSpell');
        res.json(rows);
    }catch (error){
        console.error('Error: ', error.message);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

const exportObj = {
    getAll,
    getAllByName,
    getAllByAttribute,
};

export default exportObj;

