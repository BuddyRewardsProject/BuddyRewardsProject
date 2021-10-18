const db = require('../model/dbConnection');

exports.addMerchant = (merchant) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO Merchant (merchant_id, merchant_name, reward_type) VALUES (?,?,?)", 
        [
            merchant.merchantId,
            merchant.merchantName,
            merchant.rewardType
        ], (err, result) => {
            if (err) reject(err)
            resolve(result)
        });
    })
}