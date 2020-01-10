const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const dateFormat = require('dateformat')
const template = require('art-template')

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

template.defaults.imports.dateFormat = dateFormat;

//收集post请求参数
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// 告诉express框架模板所在的位置
//第一个参数是告诉app服务器，我要设置views属性，用来设置模板引擎的默认目录
//第二个参数就是那个需要设置的默认目录。
app.set('views', path.join(__dirname, 'views'));
// 告诉express框架模板的默认后缀是什么
app.set('view engine', 'art');
// 当渲染后缀为art的模板时 所使用的模板引擎是什么
app.engine('art', require('express-art-template'));
const shunfeng = require('./route/WL.js')

const lt = require('./route/LT.js')
app.use("/shunfeng", lt);


const guoji = require('./route/LG.js')
app.use("/shunfeng", guoji);





app.use("/shunfeng", shunfeng);

const sf = require('./route/index')
app.use(sf);
app.set('views', path.join(__dirname, 'views', ));
app.engine('art', require('express-art-template'));
app.set('view engine', 'art')


app.listen(80);
console.log('创建服务器成功')