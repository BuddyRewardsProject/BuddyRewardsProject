const db = require('../model/dbConnection');

exports.getUserById() = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM Branch WHERE branch_id = ?",[
            branchId
        ],
            (err, result) => {
                if (err) reject(err)
                resolve(result)
            });
    })
}