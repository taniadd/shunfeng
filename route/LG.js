const express = require("express");
const router = express.Router();
router.get("/LG_Designed",  (req, res) => {
    
    res.render('LG_Designed.art')

})
router.get("/LG_International",  (req, res) => {
    res.render('LG_International.art')

})
router.get("/LG_quickly",  (req, res) => {
   
    res.render('LG_quickly.art')

})
router.get("/LG_seaport",  (req, res) => {
   
    res.render('LG_seaport.art')

})
router.get("/LG_very_fast",  (req, res) => {
    res.render('LG_very_fast.art')

})

module.exports = router;