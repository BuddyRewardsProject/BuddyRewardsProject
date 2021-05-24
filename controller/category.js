const db = require('./model/dbConnection');

exports.addCategory = (category) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO Category (category_id, category_name) VALUES (?,?)", 
        [
            category.categoryId,
            category.categoryName
        ], (err, result) => {
            if (err) reject(err)
            resolve(result)
        });
    })
}