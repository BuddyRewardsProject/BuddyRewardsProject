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