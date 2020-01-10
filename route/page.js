const express = require("express");
const router = express.Router();
// 李雄伟路由lxw_idea.art lxw_refrigerate.art
router.get("/lxw_idea",  (req, res) => {    
    res.render('lxw_idea.art')
})
router.get("/lxw_refrigerate",  (req, res) => {
    res.render('lxw_refrigerate.art')

})
// 徐珂路由
// xkcontinue.art xkculture.art  xkhonor.art  xkidea.art xkjournalism.art xkmember.art xkprogress.art
// xkrecruit.art xkwe.art
router.get("/xkcontinue",  (req, res) => {    
    res.render('xkcontinue.art')
})
router.get("/lxw_refrigerate",  (req, res) => {
    res.render('lxw_refrigerate.art')
})
router.get("/xkculture",  (req, res) => {    
    res.render('xkculture.art')
})
router.get("/xkhonor",  (req, res) => {
    res.render('xkhonor.art')
})
router.get("/xkidea",  (req, res) => {    
    res.render('xkidea.art')
})
router.get("/xkjournalism",  (req, res) => {
    res.render('xkjournalism.art')
})
router.get("/xkmember",  (req, res) => {    
    res.render('xkmember.art')
})
router.get("/ xkprogress",  (req, res) => {
    res.render('xkprogress.art')
})
router.get("/xkrecruit",  (req, res) => {    
    res.render('xkrecruit.art')
})
router.get("/xkwe",  (req, res) => {
    res.render('xkwe.art')
})
// 周鹏路由
// ZP-investor-calendar-activity.art ZP-investor-calendar-director.art ZP-investor-calendar-shareholder.art
router.get("/ZP-investor-calendar-activity",  (req, res) => {    
    res.render(' ZP-investor-calendar-activity.art')
})
router.get("/ZP-investor-calendar-director",  (req, res) => {
    res.render('ZP-investor-calendar-director.art')
})
router.get("/ZP-investor-calendar-shareholder",  (req, res) => {    
    res.render('ZP-investor-calendar-shareholder.art')
})
// ZP-investor-contact.art ZP-investor-govern.art ZP-investor-notice.art ZP-investor-report-finance.art
router.get("/ZP-investor-contact",  (req, res) => {
    res.render('ZP-investor-contact.art')
})
router.get("/ZP-investor-govern",  (req, res) => {    
    res.render('ZP-investor-govern.art')
})
router.get("/ZP-investor-notice",  (req, res) => {
    res.render('ZP-investor-notice.art')
})
router.get("/ZP-investor-report-finance",  (req, res) => {    
    res.render('ZP-investor-report-finance.art')
})
// ZP-investor-report-society.art ZP-repair-index.art
router.get("/ZP-investor-report-society",  (req, res) => {
    res.render('ZP-investor-report-society.art')
})
router.get("/ZP-repair-index",  (req, res) => {    
    res.render('ZP-repair-index.art')
})

module.exports = router;