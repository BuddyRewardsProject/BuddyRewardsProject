const express = require('express');
const app = express();
const db = require('./model/dbConnection');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const functions = require('./utils/functions')
const crypto = require('crypto')
require('dotenv').config()
const jwt = require('jsonwebtoken');

const branch = require("./controller/branch");
const category = require("./controller/category");
const district = require("./controller/district");
const province = require("./controller/province");
const merchant = require("./controller/merchant")
const staff = require("./controller/staff")
const login = require("./controller/login")
const staffRole = require("./controller/staffRole")

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })
app.get('/home', (req, res) => {
    db.query("SELECT * FROM Merchant", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            var results = {
                merchantId: result[0].merchant_id,
                merchantName: result[0].merchant_name
            }
            var data = {
                results: results,
                statusCode: 200
            }
            return functions.responseJson(res, data)
        }
    });
});


//Login
app.post("/merchant/v1/login", async (req, res) => {
    var userName = req.body.userName;
    var hashPassword = req.body.hashPassword;
    var result = await login.getUserById(userName);

    if (result.length > 0) {
        if (result[0].password !== hashPassword) {
            var data = {
                status: "error",
                errorMessage: "Username or Password is incorrect"
            }
            return functions.responseJson(res, data)
        }
        var user = {
            branchId: result[0].branch_id,
            branchName: result[0].branch_name,
            phone: result[0].phone,
            userName: result[0].user_name,
            districtId: result[0].district_id,
            merchantId: result[0].merchant_id
        }
        var data = {
            status: "success",
            accessToken: generateAccessToken(user)
        }
        return functions.responseJson(res, data)
    } else {
        var data = {
            status: "error",
            errorMessage: "Username or Password is incorrect"
        }
        return functions.responseJson(res, data)
    }
})

//Pin Login
app.post("/merchant/v1/login/pin",authenticateToken, async (req, res) => {
    var pin = req.body.pincode;
    var user = await staff.getStaffByPin(pin)

    if (user.length > 0) {
        if (pin === user[0].pincode) {
            var userInfo = {
                staffId: user[0].staff_id,
                firstName: user[0].first_name,
                lastName: user[0].last_name,
                phone: user[0].phone,
                roleId: user[0].role_id,
                branchId: user[0].branch_Id
            }
            var data = {
                status: "success",
                pinToken: generatePinToken(userInfo)
            }
            return functions.responseJson(res, data)
        } else {
            var data = {
                status: "error",
                errorMessage: "Conflict"
            }
            return functions.responseJson(res, data)
        }

    } else {
        var data = {
            status: "error",
            errorMessage: "Conflict"
        }
        return functions.responseJson(res, data)
    }
})

app.post("/merchant/v1/login/pin/check",authenticateToken, async (req, res) => {
    var branchId = req.body.branchId;
    var user = await staff.getStaffByBranchId(branchId)

    if (user.length > 0) {
        if (user[0].pincode === null) {
            var data = {
                status: "unsuccess"
            }
            return functions.responseJson(res, data)
        } else {
            var data = {
                status: "success"
            }
            return functions.responseJson(res, data)
        }
    } else {
        var data = {
            status: "error",
            errorMessage: "Conflict"
        }
        return functions.responseJson(res, data)
    }
})

//Register
app.post("/merchant/v1/register", async (req, res) => {
    var registerData = req.body.data;
    var generate = Math.round(new Date().getTime() / 1000);
    var hash = crypto.createHmac('sha512', process.env.SECRET_KEY)
    hash.update(registerData.merchantPassword)
    var hasedPassword = hash.digest('hex')

    if (registerData.merchantName === '') {
        var data = {
            status: "error",
            errorMessage: "Conflict"
        }
        return functions.responseJson(res, data)
    }
    var merchantInfo = {
        merchantId: generate,
        merchantName: registerData.merchantName
    }
    var branchInfo = {
        branchName: registerData.branchName,
        phone: registerData.branchPhone,
        userName: registerData.merchantUserName,
        password: hasedPassword,
        masterAccount: 1,
        districtId: registerData.districtName,
        merchantId: generate
    }
    try {
        var merchantState = await merchant.addMerchant(merchantInfo)
        var branchState = await branch.addBranch(branchInfo)
        if (merchantState.affectedRows === 1 && branchState.affectedRows === 1) {
            var staffInfo = {
                firstName: registerData.ownerFirstName,
                lastName: registerData.ownerLastName,
                phone: registerData.staffPhone,
                roleId: 1,
                branchId: branchState.insertId
            }
            var staffState = await staff.addStaff(staffInfo)
            if (staffState.affectedRows === 1) {
                var data = {
                    status: "success"
                }
                return functions.responseJson(res, data)
            }
        }
    } catch (error) {
        var data = {
            status: "error",
            errorMessage: "Conflict"
        }
        return functions.responseJson(res, data)
    }
})

//add staff in branch
app.post("/merchant/v1/branch/staff/add", authenticatePinToken, async (req, res) => {
    var authHeader = req.headers['authorization']
    var token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)
    var decode = jwt.decode(token)

    if(decode.roleId !== undefined && decode.roleId === 3){
        var data = {
            status: "error",
            errorMessage: "Do not have permittion"
        }
        return functions.responseJson(res, data)
    }
    var staffData = req.body.data;
    var generate = Math.round(new Date().getTime() / 1000);

    if (staffData.firstName === '') {
        var data = {
            status: "error",
            errorMessage: "Empty"
        }
        return functions.responseJson(res, data)
    }
    var staffInfo = {
        staffId: generate,
        firstName: staffData.staffFirstName,
        lastName: staffData.staffLastName,
        pincode: staffData.staffPin,
        phone: staffData.staffPhone,
        roleId: staffData.roleId,
        branchId: staffData.branchId
    }
    try {
        var staffState = await staff.addStaffManagement(staffInfo)
        if (staffState.affectedRows === 1) {
            var data = {
                status: "success"
            }
            return functions.responseJson(res, data)
        }
    } catch (error) {
        var data = {
            status: "error",
            errorMessage: "Conflict"
        }
        return functions.responseJson(res, data)
    }
})

app.get("/merchant/v1/register/init", async (req, res) => {
    var categoryInfo = await category.getCategory();
    var provinceInfo = await province.getProvince();
    var districtInfo = await district.getDistrict();

    var data = {
        status: "sucess",
        categories: categoryInfo,
        provinces: provinceInfo,
        districts: districtInfo
    }
    return functions.responseJson(res, data)
})

app.post("/merchant/v1/branch/staff/init", async (req, res) => {
    var branchId = req.body.branchId;
    var staffList = await staff.getStaffByBranchId(branchId);
    var staffRoleInfo = await staffRole.getStaffRole();

    var data = {
        status: "sucess",
        staffList: staffList,
        roles: staffRoleInfo
    }
    return functions.responseJson(res, data)
})

app.get("/merchant/v1/categories", (req, res) => {
    category.getCategory().then((e) => {
        var data = {
            status: "sucess",
            categories: e
        }
        return functions.responseJson(res, data)
    }).catch((e) => {
        var data = {
            status: "error",
            errorMessage: e
        }
        return functions.responseJson(res, data)
    })
})

app.get("/merchant/v1/branch/staff/role", authenticatePinToken, (req, res) => {
    staffRole.getStaffRole().then((e) => {
        var data = {
            status: "sucess",
            roles: e
        }
        return functions.responseJson(res, data)
    }).catch((e) => {
        var data = {
            status: "error",
            errorMessage: e
        }
        return functions.responseJson(res, data)
    })
})

app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3001');
})

function generateAccessToken(user) {
    return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1800s' });
}
function generatePinToken(user) {
    return jwt.sign(user, process.env.JWT_PIN_SECRET, { expiresIn: '1800s' });
}
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      console.log(err)
  
      if (err) return res.sendStatus(403)
  
      req.user = user
  
      next()
    })
  }
  function authenticatePinToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.JWT_PIN_SECRET, (err, user) => {
      console.log(err)
  
      if (err) return res.sendStatus(403)
  
      req.user = user
  
      next()
    })
  }