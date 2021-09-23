const db = require('../model/dbConnection');

exports.addCustomer = (customer) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO Customer (customer_id, first_name, last_name, nick_name, email, password, phone, gender, date_of_birth) VALUES (?,?,?,?,?,?,?,?,?)", 
        [
            customer.customerId,
            customer.customerFirstName,
            customer.customerLastName,
            customer.customerNickName,
            customer.customerEmail,
            customer.customerPassword,
            customer.customerPhone,
            customer.customerGender,
            customer.customerDOB
        ], (err, result) => {
            if (err) reject(err)
            resolve(result)
        });
    })
}

exports.getCustomerIdById = (customerId) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT customer_id FROM Customer where customer_id = ?",
        [customerId],
            (err, result) => {
                if (err) reject(err)
                resolve(result)
            });
    })
}

exports.getCustomerById = (customerId) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM Customer where customer_id = ?",
        [customerId],
            (err, result) => {
                if (err) reject(err)
                resolve(result)
            });
    })
}

exports.getCustomerByEmail = (customerEmail) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM Customer where email = ?",
        [customerEmail],
            (err, result) => {
                if (err) reject(err)
                resolve(result)
            });
    })
}