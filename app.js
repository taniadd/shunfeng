const express = require('express')
const app = express();
const mongoose = require('mongoose');
const path = require('path')
const session = require('express-session')
app.use(session({
    secret: 'asdasfgsqag'
}))
mongoose.connect('mongodb://localhost/shunfeng', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('数据库连接成功'))
    .catch((err) => console.log(err, '数据库连接失败'))
app.use(express.static(__dirname));

const sf = require('./route/index')
app.use(sf);
app.set('views', path.join(__dirname, 'views', ));
app.engine('art', require('express-art-template'));
app.set('view engine', 'art')

app.listen(80);
console.log('创建服务器成功')