const express = require('express');
const app = express();
const fs = require('fs');
const pro = require('util').promisify;

let read = pro(fs.readFile);
app.use('/index', async(req, res) => {
    let p1 = await read('./FH-Storage.html.html', 'utf-8');
    res.send(p1);
})
app.listen(80);
console.log('服务器启动成功');