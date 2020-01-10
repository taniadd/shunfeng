const express = require("express");
const router = express.Router();
router.get("/LG_Designed",  (req, res) => {
    
    res.render('/shunfeng/LG_Designed.art')

})
router.get("/LG_International",  (req, res) => {
    res.render('/shunfeng/LG_International.art')

})
router.get("/LG_quickly",  (req, res) => {
   
    res.render('/shunfeng/LG_quickly.art')

})
router.get("/LG_seaport",  (req, res) => {
   
    res.render('/shunfeng/LG_seaport.art')

})
router.get("/LG_very _fast",  (req, res) => {
    res.render('/shunfeng/LG_very _fast.art')

})

module.exports = router;