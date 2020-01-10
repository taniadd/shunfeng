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
    console.log(req.session);
    let searchnum = req.query.num

    if( req.session.tel==null) {
      res.render("WL_waybill2" ,{ message:"请先登录"})
    }else {
        if (searchnum == null) {
            let arr = await Senderinfor.find()
            let obj = {
                infor: arr
            }
            res.render("WL_waybill.art", obj)
        } else {
            let arr = []
            let arr1
            try {
                arr1 = await Senderinfor.findOne({ _id: searchnum })
                throw "没找到"
            }
            catch{
                err => console.log(err)
            }
            console.log(typeof (arr1));
            if (typeof (arr1) == "object") {
                arr.push(arr1)
                let obj = {
                    infor: arr
                }
                res.render("WL_waybill1.art", obj)
            } else {
                res.render("WL_waybill2.art", { message: "没有找到该运单" })
            }
    
    
        }
    }
  





    //   let arr= await Senderinfor.find()
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
 router.get("/WL_waybill_login",(req,res)=>{
    let tel = req.query.tel;
    req.session.tel = tel;
    req.app.locals.tel = req.session.tel;
    res.redirect('/shunfeng/WL_waybill')
    console.log(req.session);
 }) 
 router.get("/WL_quick_login",(req,res)=>{
    let tel = req.query.tel;
    req.session.tel = tel;
    req.app.locals.tel = req.session.tel;
    res.redirect('/shunfeng/WL_quick')
})
 router.get('/WL_quick_date', (req, res) => {
    req.session.destroy(function() {
        res.clearCookie('connect.sid')
        res.redirect('/shunfeng/WL_quick')
        req.app.locals.tel = undefined;
    })
 })
 router.get("/WL_sf_express_login",(req,res)=>{
    let tel = req.query.tel;
    req.session.tel = tel;
    req.app.locals.tel = req.session.tel;
    res.redirect('/shunfeng/WL_sf_express')
})
 router.get('/WL_sf_express_date', (req, res) => {
    req.session.destroy(function() {
        res.clearCookie('connect.sid')
        res.redirect('/shunfeng/WL_sf_express')
        req.app.locals.tel = undefined;
    })
 })


 router.get('/WL_waybill_date', (req, res) => {
    req.session.destroy(function() {
        res.clearCookie('connect.sid')
        res.redirect('/shunfeng/WL_waybill')
        req.app.locals.tel = undefined;
    })

})
module.exports =router