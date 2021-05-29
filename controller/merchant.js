const db = require('../model/dbConnection');

exports.addMerchant = (merchant) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO Merchant (merchant_id, merchant_name) VALUES (?,?)", 
        [
            merchant.merchantId,
            merchant.merchantName
        ], (err, result) => {
            if (err) reject(err)
            resolve(result)
        });
    })
}