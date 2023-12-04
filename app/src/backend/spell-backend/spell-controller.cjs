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


// const getAllByAttribute = (async (req, res)=>{
//     const classSelected = req.query.classSelected;
//     const level = req.query.level;
//     const school = req.query.school;
//     const duration = req.query.duration;
//     const castTime = req.query.castTime;
                  
//     const query = `SELECT * FROM ?? WHERE level = ? AND school = ? AND duration = ? AND casting_time = ?`;
//     const attributes = [classSelected, level, school, duration, castTime];

//     pool.query(query, attributes, (err, result) => {
//         if (err) {
//             console.error('Error executing query:', err);
//             res.status(500).send('Internal Server Error');
//         }else{
//             if(result.length === 0) {
//                res.json({ message: 'No matching rows found' });
//              }else {
//                res.json(result);
//             }
//         }
//     });
// });

const getAllByAttribute = async (req, res) => {
    const output = [];
    try {
        const classSelected = JSON.parse(req.query.classSelected || '[]'); //does pass array count as value?
        const levelArray = JSON.parse(req.query.levelArray || '[]');
        const schoolArray = JSON.parse(req.query.schoolArray || '[]');
        const durationArray = JSON.parse(req.query.durationArray || '[]');
        const castTimeArray = JSON.parse(req.query.castTimeArray || '[]');
        console.log("class Selected: " + classSelected + "length: " + classSelected.length);
        console.log("level Selected: " + levelArray + "length: " + levelArray.length);
        console.log("school Selected: " + schoolArray + "length: " + schoolArray.length);
        console.log("duration Selected: " + durationArray + "length: " + durationArray.length);
        console.log("cast time Selected: " + castTimeArray + "length: " + castTimeArray.length);

        // const classSelected = req.query.classSelected;
        // const level = req.query.level;
        // const school = req.query.school;
        // const duration = req.query.duration;
        // const castTime = req.query.castTime;
        // console.log("level: " + level + "school: " + school + "duration: " + duration + "casttime: " + castTime);

        if(levelArray.length == 0 && schoolArray.length == 0 && durationArray.length == 0 && castTimeArray.length == 0){
            console.log("running api functions0");
            const query = 'SELECT * FROM ??';
            const attributes = [classSelected];
            const result = await new Promise((resolve, reject) => {
                pool.query(query, attributes, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            });
            // console.log("output:" + JSON.stringify(result));
            output.push(result);
        
        }else if(levelArray.length == 0 && schoolArray.length == 0 && durationArray.length == 0){
            console.log("running api functions1");

            for (const castTime of castTimeArray) {
                const query = 'SELECT * FROM ?? WHERE casting_time = ?';
                const attributes = [classSelected, castTime];
                const result = await new Promise((resolve, reject) => {
                    pool.query(query, attributes, (err, result) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
                });
                // console.log("output:" + JSON.stringify(result));
                output.push(result);
            }
            
        }else if(levelArray.length == 0 && schoolArray.length == 0 && castTimeArray.length == 0){
            console.log("running api functions2");

            for (const duration of durationArray) {
                const query = 'SELECT * FROM ?? WHERE duration = ?';
                const attributes = [classSelected, duration];
                const result = await new Promise((resolve, reject) => {
                    pool.query(query, attributes, (err, result) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
                });
                // console.log("output:" + JSON.stringify(result));
                output.push(result);
            }
           
        }else if(levelArray.length == 0 && durationArray.length == 0 && castTimeArray.length == 0){
            console.log("running api functions3");

            for (const school of schoolArray) {
                const query = 'SELECT * FROM ?? WHERE school = ?';
                const attributes = [classSelected, school];
                const result = await new Promise((resolve, reject) => {
                    pool.query(query, attributes, (err, result) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
                });
                // console.log("output:" + JSON.stringify(result));
                output.push(result);
            }
        }else if(schoolArray.length == 0 && durationArray.length == 0 && castTimeArray.length == 0){
            console.log("running api functions4");

            for (const level of levelArray) {
                const query = 'SELECT * FROM ?? WHERE level = ?';
                const attributes = [classSelected, level];
                // pool.query(query, attributes, (err, result) => {
                //     if(err) {
                //         console.error('Error executing query:', err);
                //         res.status(500).send('Internal Server Error');
                //     }else {

                //         console.log("just result: " + JSON.stringify(result));
                //         output.push(result);
                //     }
                // });
                const result = await new Promise((resolve, reject) => {
                    pool.query(query, attributes, (err, result) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
                });
                // console.log("output:" + JSON.stringify(result));
                output.push(result);
            }
            
        }else if(levelArray.length == 0 && schoolArray.length == 0){
            console.log("running api functions5");

            for (const duration of durationArray) {
                for (const castTime of castTimeArray) {
                    const query = 'SELECT * FROM ?? WHERE duration = ? AND casting_time = ?';
                    const attributes = [classSelected, duration, castTime];
                    const result = await new Promise((resolve, reject) => {
                        pool.query(query, attributes, (err, result) => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve(result);
                            }
                        });
                    });
                    // console.log("output:" + JSON.stringify(result));
                    output.push(result);
                }
            }

        }else if(levelArray.length == 0 && durationArray.length == 0){
            console.log("running api functions6");

            for (const school of schoolArray) {
                for (const castTime of castTimeArray) {
                    const query = 'SELECT * FROM ?? WHERE school = ? AND casting_time = ?';
                    const attributes = [classSelected, school, castTime];
                    const result = await new Promise((resolve, reject) => {
                        pool.query(query, attributes, (err, result) => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve(result);
                            }
                        });
                    });
                    // console.log("output:" + JSON.stringify(result));
                    output.push(result);
                }
            }

        }else if(levelArray.length == 0 && castTimeArray.length == 0){
            console.log("running api functions7");

            for (const school of schoolArray) {
                for (const duration of durationArray) {
                    const query = 'SELECT * FROM ?? WHERE school = ? AND duration = ?';
                    const attributes = [classSelected, school, duration];
                    const result = await new Promise((resolve, reject) => {
                        pool.query(query, attributes, (err, result) => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve(result);
                            }
                        });
                    });
                    // console.log("output:" + JSON.stringify(result));
                    output.push(result);
                }
            }

        }else if(schoolArray.length == 0 && durationArray.length == 0){
            console.log("running api functions8");

            for (const level of levelArray) {
                for (const castTime of castTimeArray) {
                    const query = 'SELECT * FROM ?? WHERE level = ? AND casting_time = ?';
                    const attributes = [classSelected, level, castTime];
                    const result = await new Promise((resolve, reject) => {
                        pool.query(query, attributes, (err, result) => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve(result);
                            }
                        });
                    });
                    // console.log("output:" + JSON.stringify(result));
                    output.push(result);
                }
            }

        }else if(schoolArray.length == 0 && castTimeArray.length == 0){
            console.log("running api functions9");

            for (const level of levelArray) {
                for (const duration of durationArray) {
                    const query = 'SELECT * FROM ?? WHERE level = ? AND duration = ?';
                    const attributes = [classSelected, level, duration];
                    const result = await new Promise((resolve, reject) => {
                        pool.query(query, attributes, (err, result) => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve(result);
                            }
                        });
                    });
                    // console.log("output:" + JSON.stringify(result));
                    output.push(result);
                }
            }

        }else if(durationArray.length == 0 && castTimeArray.length == 0){
            console.log("running api functions10");

            for (const level of levelArray) {
                for (const school of schoolArray) {
                    const query = 'SELECT * FROM ?? WHERE level = ? AND school = ?';
                    const attributes = [classSelected, level, school];
                    
                    const result = await new Promise((resolve, reject) => {
                        pool.query(query, attributes, (err, result) => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve(result);
                            }
                        });
                    });
                    // console.log("output:" + JSON.stringify(result));
                    output.push(result);
                }
            }

        }else if(levelArray.length == 0){
            console.log("running api functions11");

            for (const school of schoolArray) {
                for (const duration of durationArray) {
                    for (const castTime of castTimeArray) {
                        const query = 'SELECT * FROM ?? WHERE school = ? AND duration = ? AND casting_time = ?';
                        const attributes = [classSelected, school, duration, castTime];
                        
                        const result = await new Promise((resolve, reject) => {
                            pool.query(query, attributes, (err, result) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve(result);
                                }
                            });
                        });
                        // console.log("output:" + JSON.stringify(result));
                        output.push(result);
                    }
                }
            }

        }else if(schoolArray.length == 0){
            console.log("running api functions12");

            for (const level of levelArray) {
                for (const duration of durationArray) {
                    for (const castTime of castTimeArray) {
                        const query = 'SELECT * FROM ?? WHERE level = ? AND duration = ? AND casting_time = ?';
                        const attributes = [classSelected, level, duration, castTime];
                        const result = await new Promise((resolve, reject) => {
                            pool.query(query, attributes, (err, result) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve(result);
                                }
                            });
                        });
                        // console.log("output:" + JSON.stringify(result));
                        output.push(result);
                    }
                }
            }

        }else if(durationArray.length == 0){
            console.log("running api functions13");

            for (const level of levelArray) {
                for (const school of schoolArray) {
                    for (const castTime of castTimeArray) {
                        const query = 'SELECT * FROM ?? WHERE level = ? AND school = ? AND casting_time = ?';
                        const attributes = [classSelected, level, school, castTime];
                        const result = await new Promise((resolve, reject) => {
                            pool.query(query, attributes, (err, result) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve(result);
                                }
                            });
                        });
                        // console.log("output:" + JSON.stringify(result));
                        output.push(result);
                    }
                }
            }

        }else if(castTimeArray.length == 0){
            console.log("running api functions14");

            for (const level of levelArray) {
                for (const school of schoolArray) {
                    for (const duration of durationArray) {
                        const query = 'SELECT * FROM ?? WHERE level = ? AND school = ? AND duration = ?';
                        const attributes = [classSelected, level, school, duration];
                        const result = await new Promise((resolve, reject) => {
                            pool.query(query, attributes, (err, result) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve(result);
                                }
                            });
                        });
                        // console.log("output:" + JSON.stringify(result));
                        output.push(result);
                    }
                }
            }
        }else{
            console.log("running api functions15");
            for(const level of levelArray){
                for (const school of schoolArray) {
                    for (const duration of durationArray) {
                        for (const castTime of castTimeArray) {
                            const query = 'SELECT * FROM ?? WHERE level = ? AND school = ? AND duration = ? AND casting_time = ?';
                            const attributes = [classSelected, level, school, duration, castTime];
                            const result = await new Promise((resolve, reject) => {
                                pool.query(query, attributes, (err, result) => {
                                    if (err) {
                                        reject(err);
                                    } else {
                                        resolve(result);
                                    }
                                });
                            });
                            // console.log("output:" + JSON.stringify(result));
                            output.push(result);
                        }
                    }
                }
            }
        }

        // console.log("output result: " + output);
        /*return the output */
       
        res.json(output);
        
        
    }catch (error) {
        console.error('Error in getAllByAttribute:', error);
        res.status(500).send('Internal Server Error');
    }
};

const getLevel = (async (req, res)=>{
    const classSelected = req.query.classSelected;

    const query = "SELECT DISTINCT level FROM ??;"
    pool.query(query, [classSelected],function (err, result, fields) {
        res.json(result);
    });
});

const getSchool = (async (req, res)=>{
    const classSelected = req.query.classSelected;

    const query = "SELECT DISTINCT school FROM ??;"
    pool.query(query, [classSelected],function (err, result, fields) {
        res.json(result);
    });
});
const getRange = (async (req, res)=>{
    const classSelected = req.query.classSelected;

    const query = "SELECT DISTINCT range FROM ??;"
    pool.query(query, [classSelected], function (err, result, fields) {
        res.json(result);
    });
});
const getDuration = (async (req, res)=>{
    const classSelected = req.query.classSelected;

    const query = "SELECT DISTINCT duration FROM ??;"
    pool.query(query, [classSelected], function (err, result, fields) {
        res.json(result);
    });
});
const getCastTime = (async (req, res)=>{
    const classSelected = req.query.classSelected;

    const query = "SELECT DISTINCT casting_time FROM ??;"
    pool.query(query, [classSelected],function (err, result, fields) {
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