const express = require('express');
const app = express();
let db = require('./model/dbConnection');
const cors = require('cors');
const path = require('path');
const cookieSession = require('cookie-session')
const bcrypt = require('bcrypt')
const {body, validationResult} = require('express-validator')

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })
app.get('/home', (req, res) => {
    db.query("SELECT * FROM Merchant", (err, result) => {
        if(err){
            console.log(err);
        } else {
            var results = {
                merchantId: result[0].merchant_id,
                merchantName: result[0].merchant_name
            }
            var data = {
                results: results,
                statusCode: 200
            }
            res.json(data);
        }
    });
});


//Login (No finish)
app.set('view', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

app.use(cookieSession({
    name: 'session',
    keys: ['keys1', 'key2'],
    maxAge: 3600 * 1000 //1hr
}))

//Declaring Customer Middleware (No finish)
const ifNotLoggedIn = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.render('Login');
    }
}

//Register
app.post("/merchant/register", (req, res) => {
    db.query(
        "INSERT INTO Branch (Categoty.category_name, Merchant.merchant_name, Branch.branch_name, Branch.user_name, Branch.password) JOIN Merchant ON Merchant.merchant_id = Branch.branch_id JOIN Category ON Merchant.merchant_id = Category.category_id VALUE (?, ?, ?, ?, ?)",
        [category_name, merchant_name, branch_name, user_name, password], (err, result) => {
            console.log(err);
        }
    );
})

app.listen('3001', () => {
console.log ('Server is running on port 3001');
})
