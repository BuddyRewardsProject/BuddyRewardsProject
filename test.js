const branch = require("./controller/branch")
const category = require("./controller/category")
const province = require("./controller/province")
const merchant = require("./controller/merchant")
const staff = require("./controller/staff")
const customer = require("./controller/customer")

// var generate = Math.round(new Date().getDate().getMonth() );

var d = new Date();

var date = d.getDate();
var month = d.getMonth() + 1;
var year = d.getFullYear();
var time = d.getTime();

var generate = date + "" + month + "" + year + "" + time;

console.log(generate)

const QRCode = require('qrcode')

let data = {
        customerId: generate   
}

let stringdata = JSON.stringify(data)

QRCode.toString(stringdata,{type:'terminal'},function (err, QRcode) {
 
    if(err) return console.log("error occurred")
 
    // Printing the generated code
    console.log(QRcode)
})

// var customerInfo = {
//         customerId: generate,
//         customerFirstName: "GG",
//         customerLastName: "EZ",
//         customerNickName: "WayneGump",
//         customerEmail: "Wayne@gmail.com",
//         customerPassword: "1234", //ทำ hash ด้วย
//         customerPhone: "123456789",
//         customerGender: "Male",
//         customerDOB: "2008-11-11"
// }

// customer.addCustomer(customerInfo)

// console.log(generate)

// const generator = generators.get("nanoid-simple");
// const generate = generator({ size: 8 });
// console.log(generate)

// var staffInfo = {
//     staffId: "333333",
//     firstName: "Napan",
//     lastName: "Kongkai",
//     pincode: "135791",
//     phone: "0987654321",
//     roleId: 2,
//     branchId: 4
// }

// staff.addStaffManagement(staffInfo)

// var branchInfo = {
//     branchId: 1,
//     branchName: "Chapayom จรัญ35",
//     branchLogo: "11111111111",
//     detail: "ชาดีที่คุณไว้วางใจ",
//     phone: "029999999",
//     userName: "chapayomjr35",
//     password: "123456",
//     masterAccount: 1,
//     districtId: 19,
//     merchantId: 1
// }

// const generator = generators.get("nanoid-simple");
//     const generate = generator({ size: 8 });
//     console.log(generate)
//     var merchantInfo = {
//         merchantId: generate,
//         merchantName: "Zen"
//     }
//     var branchInfo = {
//         branchName: "Zen พระราม9",
//         phone: "021234567",
//         userName: "zenrama9",
//         password: "zenzen",
//         masterAccount: 1,
//         districtId: 1,
//         merchantId: generate
//     }

//     merchant.addMerchant(merchantInfo)

// branch.addBranch(branchInfo).then((e) => {
//     var staffInfo = {
//     firstName: "Kontawat",
//     lastName: "Sodsong",
//     phone: "0911111111",
//     roleId: 1,
//     branchId: e.insertId
// }
//     staff.addStaff(staffInfo)
// })

// console.log(require('crypto').randomBytes(64).toString('hex'))


