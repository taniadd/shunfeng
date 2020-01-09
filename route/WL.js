const express = require("express");
const Senderinfor = require('../model/senderinfor.js')
const router = express.Router();
//运单追踪post路由
router.post("/WL_waybill", async (req, res) => {
    console.log(req.body);

    await Senderinfor.create(req.body)
    res.redirect('/shunfeng/WL_waybill')

})
//运单追踪get路由
router.get('/WL_waybill', async (req, res) => {
 let searchnum=req.query.num
//  let arr=searchnum==''?await Senderinfor.find():await Senderinfor.findOne({_id:searchnum})


  let arr= await Senderinfor.find()


    res.render("WL_waybill.art", {
        infor: arr
    })
})

// //运单追踪get路由
// router.get('/WL_waybill',async(req,res)=>{
//     console.log('**********')  
//   Senderinfor.find(function (err, arr) {
//    console.log('**********',arr)
//    res.render("WL_waybill.art",{infor:arr})
//   });
 
// })

//我要寄件路由
router.get('/WL_quick', (req, res) => {
    res.render("WLquick.art")
})
//服务支持路由
router.get('/WL_sf_express', (req, res) => {
    res.render("WL_sf_express.art")
})
//网点查询
router.get('/WL_sf_express_store', (req, res) => {
    res.render("WL_sf_express_store.art")
})
//服务范围
router.get('/WL_sf_express_range', (req, res) => {
    res.render("WL_sf_express_range.art")
})
//运费时效
router.get('/WL_sf_express_price', (req, res) => {
    res.render("WL_sf_express_price.art")
})
//理赔
router.get('/WL_sf_express_payment', (req, res) => {
    res.render("WL_sf_express_payment.art")
})
//无着件公示
router.get('/WL_sf_express_lost', (req, res) => {
    res.render("WL_sf_express_lost.art")
})
//常用表格
router.get('/WL_sf_express_formdownload', (req, res) => {
    res.render("WL_sf_express_formdownload.art")
})
//汇率查询
router.get('/WL_sf_express_exchange', (req, res) => {
    res.render("WL_sf_express_exchange.art")
})
//代收货款对账
router.get('/WL_sf_express_COD', (req, res) => {
    res.render("WL_sf_express_COD.art")
})
//清关服务
router.get('/WL_sf_express_clearance', (req, res) => {
    res.render("WL_sf_express_clearance.art")
})
//代收货款账单
router.get('/WL_sf_express_agency', (req, res) => {
    res.render("WL_sf_express_agency.art")
})
//收寄标准
router.get('/WL_sf_express_accept', (req, res) => {
    res.render("WL_sf_express_accept.art")
})
router.get('/delete', async (req, res) => {
    let id = req.query.id;
    await Senderinfor.findOneAndDelete({ _id: id })
    res.redirect("/shunfeng/WL_waybill")
})

module.exports = router