var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var urlencoded = bodyParser.urlencoded(({ extended: true }));
var sha1 = require('sha1');
var querystring = require('querystring');
var crypto = require('crypto');
var bcrypt = require('bcrypt');
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
app.post('/api/register', async (req, res) => {
  const { aldata } = req.body;
  const a = 10;

  try {
    const salt = await bcrypt.genSalt(a);
    const hashedPassword = await bcrypt.hash(aldata.password, salt);
    const sql = `INSERT INTO userinfo (account, password, phoneNumber, identityCard, email, salt, nickname, gender, name, birthday) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    coon.query(
      sql,
      [
        aldata.username,
        hashedPassword,
        aldata.phoneNumber,
        aldata.identityCard,
        aldata.email,
        salt,
        aldata.nickname,
        aldata.gender,
        aldata.name,
        aldata.birthday,
      ],
      (error, results) => {
        if (error) {
          console.error('資料庫操作錯誤', error);
          res.status(500).send('資料庫操作錯誤');
        } else {
          console.log('資料插入成功');
          res.send('OK');
        }
      }
    );
  } catch (error) {
    console.error('加密密碼時發生錯誤', error);
    res.status(500).send('加密密碼時發生錯誤');
  }
});




coon.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});


//登入
app.post('/api/login', async (req, res) => {
  const { account, password } = req.body;
  const query = 'SELECT * FROM userinfo WHERE account = ?';

  coon.query(query, [account], async (err, results) => {
    if (err) {
      console.error('錯誤', err);
      res.status(500).send(' Server ErrorQQ');
    } else if (results.length > 0) {
      const hashedPassword = results[0].password;

      // 使用 bcrypt 进行密码验证
      try {
        const match = await bcrypt.compare(password, hashedPassword);

        if (match) {
          //成功
          res.status(200).send('okkk');
        } else {
          //失败
          res.status(401).send('nooo');
        }
      } catch (error) {
        console.error('錯誤', error);
        res.status(500).send('錯誤QQ');
      }
    } else {
      // 用户不存在
      res.status(401).send('nooo');
    }
  });
});


app.listen(8000, function () {
  // console.clear();
  console.log(new Date().toLocaleDateString());
});
