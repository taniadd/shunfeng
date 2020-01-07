const express = require('express')
const route = express.Router();
route.get('/index', (req, res) => {
    res.render('index.art')
})

route.get('/login', async(req, res) => {
    let tel = req.query.tel;
    req.session.tel = tel;
    req.app.locals.tel = req.session.tel;
    res.redirect('/index')
    console.log(req.session);
})
route.get('/date', (req, res) => {
    req.session.destroy(function() {
        res.clearCookie('connect.sid')
        res.redirect('/index')
        req.app.locals.tel = undefined;
    })

})
module.exports = route;