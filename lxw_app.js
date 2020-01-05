const express = require('express')
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shunfeng', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('数据库连接成功'))
    .catch((err) => console.log(err, '数据库连接失败'))
// const courseSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         maxlength: 8,
//         minlength: 1
//     }

// })
app.use(express.static(__dirname));
app.listen(80);
console.log('创建服务器成功');