const branch = require("./controller/branch")
const category = require("./controller/category")
const province = require("./controller/province")
const merchant = require("./controller/merchant")
const staff = require("./controller/staff")

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

    console.log(require('crypto').randomBytes(64).toString('hex'))