const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
app.use(cors({
    origin: "http://localhost:5173", // Update with your frontend URL
    methods: ["POST", "GET"],
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    }
}));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'halalfoods_signup'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection error: ' + err.message);
    } else {
        console.log('Connected to the database');
    }
});

app.get('/', (req, res) => {
    if (req.session.username) {
        return res.json({ valid: true, username: req.session.username });
    } else {
        res.json({ valid: false });
    }
});

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO users (`username`,`email`,`password`) VALUES (?, ?, ?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error in signup:', err);
            return res.json({ Message: "Error in Node" });
        }
        return res.json(result);
    });
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users WHERE username = ? and password = ?";
    db.query(sql, [req.body.username, req.body.password], (err, result) => {
        if (err) {
            console.error('Error in login:', err);
            return res.json({ Message: "Error in Server" });
        }
        if (result.length > 0) {
            req.session.username = result[0].username;
            return res.json({ Login: true, username: req.session.username });
        } else {
            return res.json({ Login: false });
        }
    });
});

app.get('/saved', (req, res) => {
    if (!req.session.username) {
        return res.json({ success: false, message: 'User is not authenticated.' });
    }

    const userId = req.session.username;

    // Fetch the saved recipes for the user
    const selectQuery = 'SELECT * FROM saved_recipes WHERE user_id = ?';
    db.query(selectQuery, [userId], (selectError, selectResults) => {
        if (selectError) {
            return res.json({ success: false, message: 'Error fetching saved recipes.' });
        }
        const savedRecipes = selectResults.map(result => JSON.parse(result.recipe));
        return res.json({ success: true, savedRecipes });
    });
});

app.post('/saved', (req, res) => {
    if (!req.session.username) {
        return res.json({ success: false, message: 'User is not authenticated.' });
    }

    const userId = req.session.username;
    const recipeData = JSON.stringify(req.body.recipe);

    // Insert the recipe into the database
    const insertQuery = 'INSERT INTO saved_recipes (user_id, recipe) VALUES (?, ?)';
    db.query(insertQuery, [userId, JSON.stringify(recipeData)], (insertError, insertResults) => {
        if (insertError) {
            return res.json({ success: false, message: 'Error saving recipe.' });
        }
        return res.json({ success: true, message: 'Recipe saved successfully.' });
    });
});

app.post('/logout', (req, res) => {
    // Destroy the session to log the user out
    req.session.destroy((err) => {
        if (err) {
            return res.json({ success: false, message: 'Logout failed' });
        } else {
            return res.json({ success: true, message: 'Logout successful' });
        }
    });
});

app.listen(3000, () => {
    console.log("Listening on Port 3000");
});
