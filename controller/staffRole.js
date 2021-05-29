const db = require('../model/dbConnection');

exports.getStaffRole = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM StaffRole",
            (err, result) => {
                if (err) reject(err)
                resolve(result)
            });
    })
}

exports.getStaffRoleById = (categoryId) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM Staff WHERE role_id = ?",[
            categoryId
        ],
            (err, result) => {
                if (err) reject(err)
                resolve(result)
            });
    })
}