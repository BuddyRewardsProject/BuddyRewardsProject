const db = require('./model/dbConnection');

db.query(
    "INSERT INTO Branch (Categoty.category_name, Merchant.merchant_name, Branch.branch_name, Branch.user_name, Branch.password) JOIN Merchant ON Merchant.merchant_id = Branch.branch_id JOIN Category ON Merchant.merchant_id = Category.category_id VALUE (?, ?, ?, ?, ?)",
    [category_name, merchant_name, branch_name, user_name, password], (err, result) => {
        console.log(err);
    }
);