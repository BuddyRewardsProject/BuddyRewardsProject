const db = require('../model/dbConnection');

exports.addStaff = (staff) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO Staff (first_name, last_name, phone, role_id, branch_id) VALUES (?,?,?,?,?)", 
        [
            staff.firstName,
            staff.lastName,
            staff.phone,
            staff.roleId,
            staff.branchId
        ], (err, result) => {
            if (err) reject(err)
            resolve(result)
        });
    })
}