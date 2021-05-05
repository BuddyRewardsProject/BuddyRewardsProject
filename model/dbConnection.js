const mysql = require('mysql');

const db = mysql.createConnection({
    user: "admin",
    host: "buddyrewards-database.cm31eneiwhvu.ap-southeast-1.rds.amazonaws.com",
    password: "Buddy_Rewards",
    database: "dbBuddyRewards"
})

module.exports = db;