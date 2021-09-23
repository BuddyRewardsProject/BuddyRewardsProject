const db = require('../model/dbConnection');

exports.getUserById = (userName) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM Branch WHERE user_name = ?",[
            userName
        ],
            (err, result) => {
                if (err) reject(err)
                resolve(result)
            });
    })
}