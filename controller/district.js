const db = require('../model/dbConnection');

exports.getDistrict = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM District",
            (err, result) => {
                if (err) reject(err)
                resolve(result)
            });
    })
}

exports.getDistrictById = (districtId) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM District WHERE id = ?",[
            districtId
        ],
            (err, result) => {
                if (err) reject(err)
                resolve(result)
            });
    })
}