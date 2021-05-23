const branch = require("./controller/branch")

var branchInfo = {
    branchId: 1,
    branchName: "Chapayom จรัญ35",
    branchLogo: "11111111111",
    detail: "ชาดีที่คุณไว้วางใจ",
    phone: "029999999",
    userName: "chapayomjr35",
    password: "123456",
    masterAccount: 1,
    districtId: 19,
    merchantId: 1
}
branch.addBranch(branchInfo).then((e) => {
    console.log(e)
}).catch((e) => {
    console.log(e)
})