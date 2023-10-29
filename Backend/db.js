
const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express();
app.use(cors());

app.use(express.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'halalfoods_signup'
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO users (`username`,`email`,`password`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, result) => {
        if (err) return res.json({Message: "Error in Node"});
        return res.json(result);
    }) 
})


app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users WHERE username = ? and password = ?";
    db.query(sql, [req.body.username, req.body.password], (err, result) => {
        if(err) return res.json({Message: "Error in Server"});
        if (result.length > 0) {
            return res.json({Login: true})
        } else {
            return res.json({Login: false})
        }
    })
})


app.listen(3000, () => {
    console.log(("Listening on Port 3000"))
});