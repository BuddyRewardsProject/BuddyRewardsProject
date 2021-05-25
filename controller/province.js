const db = require('../model/dbConnection');

exports.getProvince = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM Province",
            (err, result) => {
                if (err) reject(err)
                resolve(result)
            });
    })
}

exports.getProvinceById = (provinceId) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM Province WHERE id = ?",[
            provinceId
        ],
            (err, result) => {
                if (err) reject(err)
                resolve(result)
            });
    })
}