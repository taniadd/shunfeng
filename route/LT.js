const express = require("express");
const router = express.Router();

router.get('/LTonlineservice', (req, res) => {
    res.render("LTonlineservice.art")
})

router.get('/LTcooperation', (req, res) => {
    res.render("LTcooperation.art")
})

router.get('/LTsuccess', (req, res) => {
    res.render("LTsuccess.art")
})

router.get('/LTsuccess1', (req, res) => {
    res.render("LTsuccess1.art")
})


router.get('/LTmedical', (req, res) => {
    res.render("LTmedical.art")
})
router.get('/LTfresh', (req, res) => {
    res.render("LTfresh.art")
})
router.get('/LTelectronic', (req, res) => {
    res.render("LTelectronic.art")
})
router.get('/LTconsumer', (req, res) => {
    res.render("LTconsumer.art")
})


router.get('/LTdetails1', (req, res) => {
    res.render("LTdetails1.art")
})
router.get('/LTdetails2', (req, res) => {
    res.render("LTdetails2.art")
})
router.get('/LTdetails3', (req, res) => {
    res.render("LTdetails3.art")
})
router.get('/LTdetails4', (req, res) => {
    res.render("LTdetails4.art")
})
router.get('/LTdetails5', (req, res) => {
    res.render("LTdetails5.art")
})
router.get('/LTdetails6', (req, res) => {
    res.render("LTdetails6.art")
})
router.get('/LTdetails7', (req, res) => {
    res.render("LTdetails7.art")
})
router.get('/LTdetails8', (req, res) => {
    res.render("LTdetails8.art")
})


module.exports = router