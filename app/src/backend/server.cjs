const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;

const app = express();

// Middleware
const corsOptions = {
    origin: (origin, callback) => {
        if (['http://localhost:4173', 'http://127.0.0.1:4173', 'http://localhost:5173', 'http://127.0.0.1:5173'].includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Database Connection
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

// Login Endpoint
app.post('/auth/login', (req, res) => {
    const { username, password } = req.body;

    // SQL query to find the user
    const query = "SELECT * FROM dndbetter.users WHERE username = ?";

    pool.query(query, [username], async (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Internal server error" });
        }
        if (results.length > 0) {
            const user = results[0];

            // Compare hashed password
            const match = await bcrypt.compare(password, user.password);

            if (match) {
                const token = jwt.sign(
                    { userId: user.id, username: user.username }, // payload
                    'ballsack', // Replace with a secret key from your environment variables
                    { expiresIn: '1h' } // token expiration
                );
                return res.status(200).json({ accessToken: token, roles: 'userRoles' });
            } else {
                // Passwords do not match
                return res.status(401).json({ message: "Unauthorized" });
            }
        } else {
            // User not found
            return res.status(401).json({ message: "Unauthorized" });
        }
    });
});

// Registration Endpoint
app.post('/auth/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validate input
        if (!username || !password) {
            return res.status(400).json({ message: "Missing Username or Password" });
        }

        // Check if username already exists
        const checkUserQuery = "SELECT * FROM dndbetter.users WHERE username = ?";
        const [users] = await pool.promise().query(checkUserQuery, [username]);

        if (users.length > 0) {
            return res.status(409).json({ message: "Username already in use" });
        }

        // Hash password and insert new user
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const insertQuery = "INSERT INTO dndbetter.users (username, password) VALUES (?, ?)";
        await pool.promise().query(insertQuery, [username, hashedPassword]);

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error in registration process');
    }
});

app.post('/statsapp', (req, res) => {
    try {
        
    //const query = "SELECT * FROM dndbetter.classes WHERE class = ?";
    //const [test] = await pool.promise().query(query, 'barbarian');
    //req = pool.query(query, 'barbarian');
    } catch (error) {
        console.error(error);
        res.status(500).send('Query error.')
    }
    //response.statusCode(500);
    //res = test;
    //return res;
    /*
    pool.query(query, 'barbarian', async(err, results) => {
        return results;
    });
    
    } catch (err) {
        console.error(errpr);
        res.status(601).send('Result error.');
    }
    */
});

// Start the server
const PORT = 3001; // Can be any port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});