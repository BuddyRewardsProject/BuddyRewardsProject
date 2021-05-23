const express = require('express');
const app = express();
const db = require('./model/dbConnection');
const cors = require('cors');
const path = require('path');
const branch = require("./controller/branch");
const bodyParser = require('body-parser');
const functions = require('./utils/functions')

app.use(bodyParser.urlencoded({ extended: false }));


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


//Register
app.post("/merchant/v1/register", (req, res) => {
    var branchInfo = req.body.branchInfo;
    branch.addBranch(branchInfo).then((e) => {
        var data = {
            status: "sucess"
        }
        return functions.responseJson(res,data)
    }).catch((e) => {
        var data = {
            status: "error",
            errorMessage: e
        }
        return functions.responseJson(res,data)
    })
})

app.listen('3001', () => {
console.log ('Server is running on port 3001');
})
