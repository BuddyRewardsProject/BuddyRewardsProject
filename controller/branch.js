const db = require('../model/dbConnection');

exports.addBranch = (branch) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO Branch (branch_id, branch_name, branch_logo, detail, phone, user_name, password, master_account, district_id, merchant_id) VALUES (?,?,?,?,?,?,?,?,?,?)", 
        [
            branch.branchId,
            branch.branchName,
            branch.branchLogo,
            branch.detail,
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