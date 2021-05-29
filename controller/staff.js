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

exports.addStaffManagement = (staff) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO Staff (staff_id, first_name, last_name, phone, role_id, branch_id) VALUES (?,?,?,?,?,?)", 
        [
            staff.staffId,
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

exports.getStaffByBranchId = (branchId) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM Staff WHERE branch_id = ?",[
            branchId
        ],
            (err, result) => {
                if (err) reject(err)
                resolve(result)
            });
    })
}

exports.getStaffByPin = (pincode) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM Staff WHERE pincode = ?",[
            pincode
        ],
            (err, result) => {
                if (err) reject(err)
                resolve(result)
            });
    })
}