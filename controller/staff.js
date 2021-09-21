const db = require('../model/dbConnection');

exports.addStaff = (staff) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO Staff (staff_id, first_name, last_name, pincode, phone, role_id, branch_id) VALUES (?,?,?,?,?,?,?)", 
        [
            staff.staffId,
            staff.firstName,
            staff.lastName,
            staff.pincode,
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
        db.query("INSERT INTO Staff (staff_id, first_name, last_name, pincode, phone, role_id, branch_id) VALUES (?,?,?,?,?,?,?)", 
        [
            staff.staffId,
            staff.firstName,
            staff.lastName,
            staff.pincode,
            staff.phone,
            staff.roleId,
            staff.branchId
        ], (err, result) => {
            if (err) reject(err)
            resolve(result)
        });
    })
}

exports.removeStaffManagement = (staffId) => {
    return new Promise((resolve, reject) => {
        db.query("DELETE FROM Staff WHERE staff_id = ?", 
        [
            staffId
        ], (err, result) => {
            if (err) reject(err)
            resolve(result)
        });
    })
}

exports.updateStaffManagement = (staff) => {
    return new Promise((resolve, reject) => {
        db.query("UPDATE Staff SET first_name = ?, last_name = ?, pincode = ?, phone = ?, role_id = ? WHERE staff_id = ?", 
        [
            staff.firstName,
            staff.lastName,
            staff.pincode,
            staff.phone,
            staff.roleId,
            staff.staffId
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

exports.getStaffByPin = (staff) => {
    console.log(staff)
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM Staff WHERE pincode = ? AND branch_id = ?",[
            staff.pincode,
            staff.branchId
        ],
            (err, result) => {
                if (err) reject(err)
                resolve(result)
            });
    })
}

exports.getStaffById = (staffId) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM Staff WHERE staff_id = ?",[
            staffId
        ],
            (err, result) => {
                if (err) reject(err)
                resolve(result)
            });
    })
}