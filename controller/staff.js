const db = require('./model/dbConnection');

exports.addStaff = (staff) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO Staff (staff_id, first_name, last_name, pincode, phone, role_id, branch_id) VALUES (?,?,?,?,?,?,?)", 
        [
            staff.staffId,
            staff.firstName,
            staff.lastName,
            staff.pinCode,
            staff.phone,
            staff.roleId,
            staff.branchId
        ], (err, result) => {
            if (err) reject(err)
            resolve(result)
        });
    })
}