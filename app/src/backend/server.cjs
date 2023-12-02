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
                    'DnDBetter', // Replace with a secret key from your environment variables
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

/* Individual Classes */
app.get('/classes/barbarian', (req, res) => {
    const query = "SELECT * FROM dndbetter.classes WHERE class = 'barbarian';"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});
app.get('/classes/bard', (req, res) => {
    const query = "SELECT * FROM dndbetter.classes WHERE class = 'bard';"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});
app.get('/classes/cleric', (req, res) => {
    const query = "SELECT * FROM dndbetter.classes WHERE class = 'cleric';"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});
app.get('/classes/druid', (req, res) => {
    const query = "SELECT * FROM dndbetter.classes WHERE class = 'druid';"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});
app.get('/classes/fighter', (req, res) => {
    const query = "SELECT * FROM dndbetter.classes WHERE class = 'fighter';"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});
app.get('/classes/monk', (req, res) => {
    const query = "SELECT * FROM dndbetter.classes WHERE class = 'monk';"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});
app.get('/classes/paladin', (req, res) => {
    const query = "SELECT * FROM dndbetter.classes WHERE class = 'paladin';"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});
app.get('/classes/ranger', (req, res) => {
    const query = "SELECT * FROM dndbetter.classes WHERE class = 'ranger';"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});
app.get('/classes/rogue', (req, res) => {
    const query = "SELECT * FROM dndbetter.classes WHERE class = 'rogue';"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});
app.get('/classes/sorcerer', (req, res) => {
    const query = "SELECT * FROM dndbetter.classes WHERE class = 'sorcerer';"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});
app.get('/classes/warlock', (req, res) => {
    const query = "SELECT * FROM dndbetter.classes WHERE class = 'warlock';"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});
app.get('/classes/wizard', (req, res) => {
    const query = "SELECT * FROM dndbetter.classes WHERE class = 'wizard';"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});

/* Individual Races */
app.get('/races/dragonborn', (req, res) => {
    const query = "SELECT * FROM dndbetter.races WHERE race = 'Dragonborn';"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});
app.get('/races/dwarf', (req, res) => {
    const query = "SELECT * FROM dndbetter.races WHERE race = 'Dwarf';"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});
app.get('/races/elf', (req, res) => {
    const query = "SELECT * FROM dndbetter.races WHERE race = 'Elf';"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});
app.get('/races/gnome', (req, res) => {
    const query = "SELECT * FROM dndbetter.races WHERE race = 'Gnome';"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});
app.get('/races/halfelf', (req, res) => {
    const query = "SELECT * FROM dndbetter.races WHERE race = 'Half Elf';"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});
app.get('/races/halforc', (req, res) => {
    const query = "SELECT * FROM dndbetter.races WHERE race = 'Half Orc';"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});
app.get('/races/halfling', (req, res) => {
    const query = "SELECT * FROM dndbetter.races WHERE race = 'Halfling';"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});
app.get('/races/human', (req, res) => {
    const query = "SELECT * FROM dndbetter.races WHERE race = 'Human';"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});
app.get('/races/tiefling', (req, res) => {
    const query = "SELECT * FROM dndbetter.races WHERE race = 'Tiefling';"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});

/* Items */
app.get('/items/ammo', (req, res) => {
    const query = "SELECT * FROM dndbetter.ammo;"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});
app.get('/items/armor', (req, res) => {
    const query = "SELECT * FROM dndbetter.armor;"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});
app.get('/items/equipment', (req, res) => {
    const query = "SELECT * FROM dndbetter.equipment;"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});
app.get('/items/tools', (req, res) => {
    const query = "SELECT * FROM dndbetter.tools;"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});
app.get('/items/weapons', (req, res) => {
    const query = "SELECT * FROM dndbetter.weapons;"
    pool.query(query, function (err, result, fields) {
        res.json(result);
    });
});

// Start the server
const PORT = 3001; // Can be any port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});