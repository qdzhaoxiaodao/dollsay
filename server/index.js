const userApi = require('./api/userApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, '../server/dist')))
app.get('*', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, '../server/dist/index.html'), 'utf-8')
    res.send(html)
})
// 后端api路由
app.use('/api/user', userApi);
// 监听端口
app.listen(3000);
console.log('主人，您的服务器已成功启动，地址在http://localhost:3000');