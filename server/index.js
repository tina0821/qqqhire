var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var urlencoded = bodyParser.urlencoded(({ extended: true }));
var sha1 = require('sha1');
var querystring = require('querystring');
var crypto = require('crypto');
var coon = require('./routes/db');
var app = express();
app.use(cors());
app.use(urlencoded);
app.use(express.json())
app.use('/img', express.static('public/img'))
app.get('/', function (req, res) {
    let a = sha1('1234', 'kjdsfkjds');
    ['$', '#',]
    res.send(a);
});

app.get('/cart', function (req, res) {
    res.send('cartInfo');
});


//註冊
// 處理註冊請求
app.post('/api/register', (req, res) => {
    const { aldata } = req.body;
    // const { username, password } = aldata;
    console.log(aldata.username);
    // 在這裡使用資料庫連線物件執行INSERT操作，將資料存儲到資料庫
    //加密的函式
    const passwordHash = crypto.createHash('sha1').update(aldata.password).digest('hex');
    const sql =
        `INSERT INTO userinfo (account, password,phoneNumber ,identityCard ,email) VALUES (?, ?,?,?,?)`;
    coon.query(sql, [aldata.username, passwordHash,aldata.phoneNumber, aldata.identityCard,aldata.email], (error, results) => {
        if (error) {
            console.error('資料庫操作錯誤', error);
        } else {
            console.log('資料插入成功');
            res.send('OK');
        }
    });
});



app.listen(8000, function () {
    // console.clear();
    console.log(new Date().toLocaleDateString());
});
