const db = require('../model/dbConnection');

exports.getUserById = (userName) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM Branch b JOIN Merchant m On m.merchant_id = b.merchant_id WHERE user_name = ?",[
            userName
        ],
            (err, result) => {
                if (err) reject(err)
                resolve(result)
            });
    })
}