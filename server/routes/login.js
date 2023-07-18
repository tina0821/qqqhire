var express = require('express');
var router = express.Router();
var coon = require('./db');
var bcrypt = require('bcrypt');

//註冊
router.post('/api/register', async (req, res) => {
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







//登入
router.post('/api/login', async (req, res) => {
  const { account, password } = req.body;
  const query = 'SELECT * FROM userinfo WHERE account = ?';

  coon.query(query, [account], async (err, results) => {
    if (err) {
      console.error('錯誤', err);
      res.status(500).send(' Server ErrorQQ');
    } else if (results.length > 0) {
      const hashedPassword = results[0].password;
      try {
        const match = await bcrypt.compare(password, hashedPassword);

        if (match) {
          //成功
          res.status(200).send('okkk');
        } else {
        //gg
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

module.exports = router