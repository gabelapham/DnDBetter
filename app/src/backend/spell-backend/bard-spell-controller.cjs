// const pool = require('./index.cjs');
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'database-1.cmqlznpoxxy9.us-east-2.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'DnDisAwesome',
    database: 'dndbetter', // Replace with your database name
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// const mysql = require('mysql2');

const getAll = (async (req, res)=>{
    const query = "SELECT * FROM bardSpell;"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});


const getAllByAttribute = (async (req, res)=>{
    const level = req.query.level;

    const query = `SELECT * FROM bardSpell WHERE level = ?`;
    pool.query(query, [level], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Internal Server Error');
        }else{
            res.json(result);
        }
    });
});

const getLevel = (async (req, res)=>{
    const query = "SELECT DISTINCT level FROM bardSpell;"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});

const getSchool = (async (req, res)=>{
    const query = "SELECT DISTINCT school FROM bardSpell;"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});
const getRange = (async (req, res)=>{
    const query = "SELECT DISTINCT range FROM bardSpell;"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});
const getDuration = (async (req, res)=>{
    const query = "SELECT DISTINCT duration FROM bardSpell;"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});
const getCastTime = (async (req, res)=>{
    const query = "SELECT DISTINCT casting_time FROM bardSpell;"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});



module.exports = {
    getAll,
    getAllByAttribute,
    getLevel,
    getSchool,
    getRange,
    getDuration,
    getCastTime,
};