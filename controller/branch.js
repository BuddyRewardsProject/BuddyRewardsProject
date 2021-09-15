const db = require('../model/dbConnection');

exports.addBranch = (branch) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO Branch (branch_name, phone, user_name, password, master_account, district_id, merchant_id) VALUES (?,?,?,?,?,?,?)", 
        [
            branch.branchName,
            branch.phone,
            branch.userName,
            branch.password,
            branch.masterAccount,
            branch.districtId,
            branch.merchantId
        ], (err, result) => {
            if (err) reject(err)
            resolve(result)
        });
    })
}

exports.removeBranchManagement = (branchId) => {
    return new Promise((resolve, reject) => {
        db.query("DELETE FROM Branch WHERE branch_id = ?", 
        [
            branchId
        ], (err, result) => {
            if (err) reject(err)
            resolve(result)
        });
    })
}

exports.getBranchByMerchantId = (merchantId) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM Branch WHERE merchant_id = ?",[
            merchantId
        ],
            (err, result) => {
                if (err) reject(err)
                resolve(result)
            });
    })
}

exports.getBranchById = (branchId) => {
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